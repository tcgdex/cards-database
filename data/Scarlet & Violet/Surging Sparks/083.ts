import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Cofagrigus",
		fr: "Tutankafer",
		es: "Cofagrigus",
		it: "Cofagrigus",
		pt: "Cofagrigus",
		de: "Echnatoll"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Law of the Underworld",
			fr: "Loi de l'Outre-Monde",
			es: "Ley del Inframundo",
			it: "Legge del Sottomondo",
			pt: "Lei do Submundo",
			de: "Gebot der Unterwelt"
		},

		effect: {
			en: "Put 6 damage counters on each Pokémon that has an Ability (both yours and your opponent's).",
			fr: "Placez 6 marqueurs de dégâts sur chacun des Pokémon ayant un talent (les vôtres et ceux de votre adversaire).",
			es: "Pon 6 contadores de daño en cada Pokémon que tenga una habilidad (tanto tuyos como de tu rival).",
			it: "Metti sei segnalini danno su ciascun Pokémon che ha un'abilità, sia tuo che del tuo avversario.",
			pt: "Coloque 6 contadores de dano em cada Pokémon que tem uma Habilidade (seus e do seu oponente).",
			de: "Lege 6 Schadensmarken auf jedes Pokémon (deine und die deines Gegners), das eine Fähigkeit hat."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Spooky Shot",
			fr: "Tir Effrayant",
			es: "Disparo Embrujado",
			it: "Colpomistero",
			pt: "Tiro Assustador",
			de: "Spukschuss"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		normal: false
	},

	illustrator: "Shiburingaru",

	thirdParty: {
		cardmarket: 794384
	}
}

export default card
