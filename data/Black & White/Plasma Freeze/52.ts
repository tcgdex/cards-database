import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Metagross",
		fr: "Métalosse",
		es: "Metagross",
		it: "Metagross",
		pt: "Metagross",
		de: "Metagross"
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
		en: "Metang",
		fr: "Métang",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Plasma Search",
				fr: "Recherche Plasma",
				es: "Búsqueda de Plasma",
				it: "Ricerca Plasma",
				pt: "Busca de Plasma",
				de: "Plasmasuche"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a Team Plasma card, reveal it, and put it into your hand. Shuffle your deck afterward. You may not use an Ability with the same name during your turn.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher une carte de la Team Plasma dans votre deck, la montrer et l'ajouter à votre main. Mélangez ensuite votre deck. Vous ne pouvez pas utiliser une capacité spéciale du même nom pendant votre tour.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes buscar en tu baraja una carta del Equipo Plasma, enseñarla y ponerla en tu mano. Baraja las cartas de tu baraja después. No puedes usar una habilidad con el mismo nombre durante tu turno.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi cercare nel tuo mazzo una carta Team Plasma, mostrarla e aggiungerla alle carte che hai in mano. Poi rimischia le carte del tuo mazzo. Non puoi utilizzare un’abilità con lo stesso nome durante il tuo turno.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você pode procurar um card da Equipe Plasma em seu deck, revelá-lo e colocá-lo na sua mão. Em seguida, embaralhe seus cards. Você não poderá usar uma Habilidade com o mesmo nome durante sua vez de jogar.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dein Deck nach 1 Team-Plasma-Karte durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck. Du kannst keine Fähigkeit mit demselben Namen während deines Zuges einsetzen."
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
				en: "Mind Bend",
				fr: "Contrôleur d'Esprit",
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
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

	thirdParty: {
		cardmarket: 280930
	}
}

export default card
