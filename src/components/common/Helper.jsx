import {
  ContactData,
  ContactList,
  FocusSelling,
  MLogo,
  MoneyInHand,
  SalesMen,
  Search,
  StremlinedDistribution,
  TargetBoard,
} from "./Icons";
import pipedrive from "../../assets/images/one-click/pipedrive.svg";
import hubspot from "../../assets/images/one-click/hubspot.svg";
import sfdc from "../../assets/images/one-click/saleforce.svg";
import outreach from "../../assets/images/one-click/outreach.svg";
import salesoft from "../../assets/images/one-click/salesoft.svg";
import monday from "../../assets/images/one-click/monday.svg";
import brandone from "../../assets/images/brands/brand-1.svg";
import cultivado from "../../assets/images/brands/cultivado.svg";
import sos from "../../assets/images/brands/sos.svg";

export const salesSuffer = [
  {
    icon: <Search />,
    title: "Daily, 2/8 hours are spent searching for decision makers.",
  },
  {
    icon: <TargetBoard />,
    title:
      "Over 90% report low accuracy in contact data, leading to missed opportunities.",
  },
  {
    icon: <SalesMen />,
    title: "Lost productivity costs $18,000 per salesperson annually.",
  },
];
export const findBuyer = [
  {
    icon: <MLogo />,
    title:
      "Mintel.ai learns & understands your Ideal customer profile from your CRM, Website Visitors & Intent Sources",
  },
  {
    icon: <ContactList />,
    title:
      "Generates list of contacts based on your ICP with the most accurate contact information.",
  },
  {
    icon: <MoneyInHand />,
    title: "Provides minty fresh, qualified leads daily to your salespeople",
  },
];
export const MinelizeCards = [
  {
    icon: <ContactData />,
    title: "Accurate Contact Data",
    description: (
      <>
        Don't miss out on potential buyers. Our waterfall enrichment allows you
        to tap into 15+ top data providers.{" "}
        <span className="font-bold text-white">
          If you can't find the contact info, no one can.
        </span>
      </>
    ),
  },
  {
    icon: <StremlinedDistribution />,
    title: "Streamlined Lead Distribution",
    description: (
      <>
        Our smart lead routing system ensures leads are quickly and efficiently
        assigned to the right sales rep,{" "}
        <span className="font-bold text-white">
          fostering better team collaboration.
        </span>
      </>
    ),
  },
  {
    icon: <FocusSelling />,
    title: "Focus on Selling, Not Searching",
    description: (
      <>
        Redirect the time saved from manual prospecting towards engaging with
        prospects, nurturing leads, and{" "}
        <span className="font-bold text-white">
          closing deals for increased revenue.
        </span>
      </>
    ),
  },
];

export const OneClickInstall = [
  {
    icon: pipedrive,
    title: "Pipedrive",
  },
  {
    icon: hubspot,
    title: "Hubspot",
  },
  {
    icon: sfdc,
    title: "SFDC",
  },
  {
    icon: outreach,
    title: "Outreach",
  },
  {
    icon: salesoft,
    title: "Salesloft",
  },
  {
    icon: monday,
    title: "Monday",
  },
];

export const brands = [
  {
    image: brandone,
    title: "band",
  },
  {
    image: cultivado,
    title: "cultivado",
  },
  {
    image: sos,
    title: "sos",
  },
];
