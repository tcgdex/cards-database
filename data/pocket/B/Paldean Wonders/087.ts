import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		'fr-fr': "Gros Ballon",
		'en-us': "Big Air Balloon",
		'es-es': "Globo Helio Grande",
		'it-it': "Palloncino Gigante",
		'pt-br': "Grande Balão de Ar",
		'de-de': "Großer Luftballon"
  },
  illustrator: "Toyste Beach",
  rarity: "Two Diamond",
  category: "Trainer",
  effect: {
		'fr-fr': "Le Pokémon de Niveau 2 auquel cette carte est attachée n'a pas de Coût de Retraite.",
		'en-us': "The Stage 2 Pokémon this card is attached to has no Retreat Cost.",
		'es-es': "El Pokémon de Fase 2 al que esté unida esta carta no tiene ningún Coste de Retirada.",
		'it-it': "Il Pokémon di Fase 2 a cui è assegnata questa carta non ha costo di ritirata.",
		'pt-br': "O Pokémon Estágio 2 ao qual esta carta está ligada não tem custo de Recuo.",
		'de-de': "Das Phase-2-Pokémon, an das diese Karte angelegt ist, hat keine Rückzugskosten."
  },
  trainerType: "Tool",
};

export default card;