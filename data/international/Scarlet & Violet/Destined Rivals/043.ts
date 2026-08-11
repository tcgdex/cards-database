import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [479],
	set: Set,

	name: {
		'en-us': "Heat Rotom",
		'fr-fr': "Motisma Chaleur",
		'de-de': "Hitze-Rotom",
		'it-it': "Rotom Calore",
		'es-es': "Rotom Calor",
		'pt-br': "Rotom Calor",
		'es-mx': "Rotom Calor"
	},

	illustrator: "Dsuke",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Singe",
			'fr-fr': "Roussi",
			'de-de': "Versengung",
			'it-it': "Scottata",
			'es-es': "Quemadura",
			'pt-br': "Chamuscada",
			'es-mx': "Quemadura"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Quemado."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Gadget Show",
			'fr-fr': "Démonstration de Gadgets",
			'de-de': "Gadget-Show",
			'it-it': "Mostra di Gadget",
			'es-es': "Espectáculo de Utensilios",
			'pt-br': "Show de Bugigangas",
			'es-mx': "Show de Artefactos"
		},

		effect: {
			'en-us': "This attack does 30 damage for each Pokémon Tool attached to all of your Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chaque Outil Pokémon attaché à tous vos Pokémon.",
			'de-de': "Diese Attacke fügt für jede an alle deine Pokémon angelegte Pokémon-Ausrüstung 30 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 30 danni per ogni carta Oggetto Pokémon assegnata ai tuoi Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño por cada Herramienta Pokémon unida a cada uno de tus Pokémon.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada Ferramenta Pokémon ligada a todos os seus Pokémon.",
			'es-mx': "Este ataque hace 30 puntos de daño por cada Herramienta Pokémon unida a cada uno de tus Pokémon."
		},

		damage: "30×"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825917,
				tcgplayer: 632862
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825917,
				tcgplayer: 632862
			}
		},
	],
}

export default card
