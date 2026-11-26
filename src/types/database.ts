export type ServiceCategory =
  | 'BI_ANALYTICS'
  | 'WEB_DEVELOPMENT'
  | 'MANAGEMENT_SYSTEMS'
  | 'WORKFLOW_AUTOMATION'
  | 'DATA_MONITORING'
  | 'TRANSFORMATION_CONSULTING';

export type ProjectStatus =
  | 'INQUIRY'
  | 'REVIEWING'
  | 'QUALIFIED'
  | 'SCOPING'
  | 'PROPOSAL_SENT'
  | 'NEGOTIATION'
  | 'WON'
  | 'LOST'
  | 'ACTIVE'
  | 'COMPLETED';

export interface ProjectLead {
  id: string;
  company_name: string;
  contact_name: string;
  contact_phone: string;
  contact_email?: string;
  industry?: string;
  service_category: ServiceCategory | string;
  problem_statement: string;
  expected_outcome?: string;
  budget_range_etb: string;
  preferred_timeline?: string;
  timeline_weeks: number;
  status: ProjectStatus;
  priority?: 'LOW' | 'MEDIUM' | 'HIGH';
  internal_notes?: string;
  follow_up_date?: string | null;
  estimated_revenue_etb: number;
  contracted_revenue_etb?: number;
  received_payments_etb?: number;
  direct_delivery_cost_etb: number;
  assigned_talent_id?: string | null;
  client_user_id?: string | null;
  created_at: string;
}