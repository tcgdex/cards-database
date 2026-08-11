import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [550],
	set: Set,

	name: {
		'en-us': "Basculin",
		'fr-fr': "Bargantua",
		'es-es': "Basculin",
		'it-it': "Basculin",
		'pt-br': "Basculin",
		'de-de': "Barschuft"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Souichirou Gunjima",

	description: {
		'en-us': "Known for their violence, these Pokémon have the most fights with schools of red-striped Basculin."
	},

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Swarm the Wound",
			'fr-fr': "Assaut sur la Plaie",
			'de-de': "Wundschwarm",
			'es-es': "Agrandar la Herida",
			'pt-br': "Aglomerar na Ferida",
			'it-it': "Accerchiamento Spietato"
		},

		damage: "30+",

		effect: {
			'en-us': "This attack does 10 more damage for each damage counter on your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 10 Schadenspunkte mehr zu.",
			'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
			'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano no Pokémon Ativo do seu oponente.",
			'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582204,
				tcgplayer: 253215
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582204,
				tcgplayer: 253215
			}
		},
	],
}

export default card
