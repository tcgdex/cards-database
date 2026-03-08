import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [851],
	set: Set,

	name: {
		en: "Centiskorch",
		fr: "Scolocendre",
		es: "Centiskorch",
		it: "Centiskorch",
		pt: "Centiskorch",
		de: "Infernopod"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	evolveFrom: {
		en: "Sizzlipede",
		fr: "Grillepattes",
		es: "Sizzlipede",
		it: "Sizzlipede",
		pt: "Sizzlipede",
		de: "Thermopod"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Singe",
			fr: "Roussi",
			es: "Quemadura",
			it: "Scottata",
			pt: "Chamuscada",
			de: "Versengung"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			en: "Charring Breath",
			fr: "Souffle Incendiaire",
			es: "Aliento Incendiario",
			it: "Incenerespiro",
			pt: "Hálito Carbonizador",
			de: "Schwelender Atem"
		},

		effect: {
			en: "If your opponent's Active Pokémon isn't Burned, this attack does nothing.",
			fr: "Si le Pokémon Actif de votre adversaire n'est pas Brûlé, cette attaque ne fait rien.",
			es: "Si el Pokémon Activo de tu rival no está Quemado, este ataque no hace nada.",
			it: "Se il Pokémon attivo del tuo avversario non è bruciato, questo attacco non ha effetto.",
			pt: "Se o Pokémon Ativo do seu oponente não estiver Queimado, este ataque não fará nada.",
			de: "Wenn das Aktive Pokémon deines Gegners nicht verbrannt ist, hat diese Attacke keine Auswirkungen."
		},

		damage: 180
	}],

	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Krgc",

	thirdParty: {
		cardmarket: 760667
	}
}

export default card