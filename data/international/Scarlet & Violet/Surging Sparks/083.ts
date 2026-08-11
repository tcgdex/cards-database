import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [563],
	set: Set,

	name: {
		'en-us': "Cofagrigus",
		'fr-fr': "Tutankafer",
		'es-es': "Cofagrigus",
		'it-it': "Cofagrigus",
		'pt-br': "Cofagrigus",
		'de-de': "Echnatoll"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Yamask",
		'fr-fr': "Tutafeh",
		'es-es': "Yamask",
		'it-it': "Yamask",
		'pt-br': "Yamask",
		'de-de': "Makabaja"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Law of the Underworld",
			'fr-fr': "Loi de l'Outre-Monde",
			'es-es': "Ley del Inframundo",
			'it-it': "Legge del Sottomondo",
			'pt-br': "Lei do Submundo",
			'de-de': "Gebot der Unterwelt"
		},

		effect: {
			'en-us': "Put 6 damage counters on each Pokémon that has an Ability (both yours and your opponent's).",
			'fr-fr': "Placez 6 marqueurs de dégâts sur chacun des Pokémon ayant un talent (les vôtres et ceux de votre adversaire).",
			'es-es': "Pon 6 contadores de daño en cada Pokémon que tenga una habilidad (tanto tuyos como de tu rival).",
			'it-it': "Metti sei segnalini danno su ciascun Pokémon che ha un'abilità, sia tuo che del tuo avversario.",
			'pt-br': "Coloque 6 contadores de dano em cada Pokémon que tem uma Habilidade (seus e do seu oponente).",
			'de-de': "Lege 6 Schadensmarken auf jedes Pokémon (deine und die deines Gegners), das eine Fähigkeit hat."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Spooky Shot",
			'fr-fr': "Tir Effrayant",
			'es-es': "Disparo Embrujado",
			'it-it': "Colpomistero",
			'pt-br': "Tiro Assustador",
			'de-de': "Spukschuss"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794384,
				tcgplayer: 589905
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794384,
				tcgplayer: 589905
			}
		},
	],

	illustrator: "Shiburingaru",
	
}

export default card
