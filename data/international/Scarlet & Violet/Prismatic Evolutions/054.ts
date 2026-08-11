import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [901],
	set: Set,

	name: {
		'en-us': "Bloodmoon Ursaluna",
		'fr-fr': "Ursaking Lune Vermeille",
		'es-es': "Ursaluna Luna Carmesí",
		'pt-br': "Ursaluna Lua Sangrenta",
		'it-it': "Ursaluna Luna Cremisi",
		'de-de': "Blutmond-Ursaluna"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Battle-Hardened",
			'fr-fr': "Aguerri au Combat",
			'es-es': "Veteranía en Combate",
			'pt-br': "Bom de Briga",
			'it-it': "Temprato dalla Lotta",
			'de-de': "Kampferprobt"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may attach up to 2 Basic {F} Energy cards from your hand to this Pokémon.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez attacher jusqu'à 2 cartes Énergie {F} de base de votre main à ce Pokémon.",
			'es-es': "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes unir hasta 2 cartas de Energía {F} Básica de tu mano a este Pokémon.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá ligar até 2 cartas de Energia {F} Básica da sua mão a este Pokémon.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi assegnargli fino a due carte Energia base {F} dalla tua mano.",
			'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du bis zu 2 Basis-{F}-Energiekarten aus deiner Hand an dieses Pokémon anlegen."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Mad Bite",
			'fr-fr': "Morsure Enragée",
			'es-es': "Mordisco Enloquecido",
			'pt-br': "Mordida Insana",
			'it-it': "Impazzamorso",
			'de-de': "Irrer Biss"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each damage counter on your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada contador de dano no Pokémon Ativo do seu oponente.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "H",

	illustrator: "Souichirou Gunjima",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805443,
				tcgplayer: 610409
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805443,
				tcgplayer: 610409
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806484,
				tcgplayer: 610575
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806485,
				tcgplayer: 610676
			}
		},
	],
}

export default card
