import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		en: "Revavroom",
		fr: "Vrombotor",
		es: "Revavroom",
		it: "Revavroom",
		de: "Knattatox",
		'pt-br': "Revavroom",
		ko: "부르르룸"
  },
  illustrator: "Anesaki Dynamic",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 110,
  types: ["Metal"],
  dexId: [966],
  evolveFrom: {
		en: "Varoom",
		fr: "Vrombi",
		es: "Varoom",
		it: "Varoom",
		pt: "Varoom",
		de: "Knattox"
  },
  description: {
    en: "Revavroom viciously threatens others with the sound of its exhaust. It sticks its tongue out from its cylindrical mouth and sprays toxic fluids.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        en: "Poison Gas",
        fr: "Gaz Toxik",
        es: "Gas Venenoso",
        it: "Velenogas",
        de: "Giftwolke",
        'pt-br': "Gás Venenoso",
        ko: "독가스"
      },
      damage: "50",
      cost: ["Metal", "Colorless"],
      effect: {
        en: "Your opponent's Active Pokémon is now Poisoned.",
        fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
        de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
        it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
        es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
        pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
        'es-mx': "El Pokémon Activo de tu rival ahora está Envenenado."
      },
    },
  ],
  weaknesses: [
    {
      type: "Fire",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;