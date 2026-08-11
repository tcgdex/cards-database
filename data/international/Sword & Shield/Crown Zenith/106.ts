import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [128],
	set: Set,

	name: {
		'en-us': "Tauros",
		'fr-fr': "Tauros",
		'es-es': "Tauros",
		'it-it': "Tauros",
		'pt-br': "Tauros",
		'de-de': "Tauros"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Smash Kick",
			'fr-fr': "Coud'Pattes",
			'es-es': "Patada Destrucción",
			'it-it': "Calcio Esplosivo",
			'pt-br': "Chute Poderoso",
			'de-de': "Schmetterkick"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Adrena-Tackle",
			'fr-fr': "Adréna-Charge",
			'es-es': "Placaje Adrenalina",
			'it-it': "Azione Adrenalinica",
			'pt-br': "Investida de Adrenalina",
			'de-de': "Adrena-Tackle"
		},

		effect: {
			'en-us': "If this Pokémon has no damage counters on it, this attack does nothing.",
			'fr-fr': "Si ce Pokémon n'a aucun marqueur de dégâts, cette attaque ne fait rien.",
			'es-es': "Si este Pokémon no tiene ningún contador de daño sobre él, este ataque no hace nada.",
			'it-it': "Se questo Pokémon non ha segnalini danno, questo attacco non ha effetto.",
			'pt-br': "Se este Pokémon não tiver nenhum contador de dano nele, este ataque não fará nada.",
			'de-de': "Wenn auf diesem Pokémon keine Schadensmarken liegen, hat diese Attacke keine Auswirkungen."
		}
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "When Tauros begins whipping itself with its tails, it's a warning that the Pokémon is about to charge with astounding speed.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691825,
				tcgplayer: 478114
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691825,
				tcgplayer: 478114
			}
		},
	],
}

export default card
