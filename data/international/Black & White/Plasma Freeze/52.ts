import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Metagross",
		'fr-fr': "Métalosse",
		'es-es': "Metagross",
		'it-it': "Metagross",
		'pt-br': "Metagross",
		'de-de': "Metagross"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		376,
	],

	hp: 140,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Metang",
		'fr-fr': "Métang",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Plasma Search",
				'fr-fr': "Recherche Plasma",
				'es-es': "Búsqueda de Plasma",
				'it-it': "Ricerca Plasma",
				'pt-br': "Busca de Plasma",
				'de-de': "Plasmasuche"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may search your deck for a Team Plasma card, reveal it, and put it into your hand. Shuffle your deck afterward. You may not use an Ability with the same name during your turn.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher une carte de la Team Plasma dans votre deck, la montrer et l'ajouter à votre main. Mélangez ensuite votre deck. Vous ne pouvez pas utiliser une capacité spéciale du même nom pendant votre tour.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes buscar en tu baraja una carta del Equipo Plasma, enseñarla y ponerla en tu mano. Baraja las cartas de tu baraja después. No puedes usar una habilidad con el mismo nombre durante tu turno.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi cercare nel tuo mazzo una carta Team Plasma, mostrarla e aggiungerla alle carte che hai in mano. Poi rimischia le carte del tuo mazzo. Non puoi utilizzare un’abilità con lo stesso nome durante il tuo turno.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você pode procurar um card da Equipe Plasma em seu deck, revelá-lo e colocá-lo na sua mão. Em seguida, embaralhe seus cards. Você não poderá usar uma Habilidade com o mesmo nome durante sua vez de jogar.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du dein Deck nach 1 Team-Plasma-Karte durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck. Du kannst keine Fähigkeit mit demselben Namen während deines Zuges einsetzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mind Bend",
				'fr-fr': "Contrôleur d'Esprit",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "With four linked brains, it's more intelligent than a supercomputer, and it uses calculations to analyze foes.",
	},

	thirdParty: {
		cardmarket: 280930,
		tcgplayer: 87343
	}
}

export default card
