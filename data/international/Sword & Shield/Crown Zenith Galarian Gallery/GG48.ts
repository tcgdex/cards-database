import { Card } from "models/database/card"
import Set from "../Crown Zenith Galarian Gallery"

const card: Card = {
	dexId: [888],
	set: Set,

	name: {
		'en-us': "Zacian V",
		'fr-fr': "Zacian V",
		'es-es': "Zacian V",
		'it-it': "Zacian V",
		'pt-br': "Zacian V",
		'de-de': "Zacian V"
	},

	illustrator: "Hataya",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Roar of the Sword",
			'fr-fr': "Hurlement de l'Épée",
			'es-es': "Rugido de la Espada",
			'it-it': "Boato della Spada",
			'pt-br': "Rugido da Espada",
			'de-de': "Gebrüll des Schwertes"
		},

		effect: {
			'en-us': "Once during your turn, you may search your deck for a Psychic Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck. If you use this Ability, your turn ends.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Énergie Psychic, puis l'attacher à l'un de vos Pokémon. Mélangez ensuite votre deck. Si vous utilisez ce talent, votre tour se termine.",
			'es-es': "Una vez durante tu turno, puedes buscar en tu baraja 1 carta de Energía Psychic y unirla a 1 de tus Pokémon. Después, baraja las cartas de tu baraja. Si usas esta habilidad, tu turno termina.",
			'it-it': "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta Energia Psychic e assegnarla a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo. Se usi questa abilità, il tuo turno finisce.",
			'pt-br': "Uma vez durante o seu turno, você poderá procurar por 1 carta de Energia Psychic no seu baralho e ligá-la a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho. Se você usar esta Habilidade, o seu turno acabará.",
			'de-de': "Einmal während deines Zuges kannst du dein Deck nach 1 Psychic-Energiekarte durchsuchen und sie an 1 deiner Pokémon anlegen. Mische anschließend dein Deck. Wenn du diese Fähigkeit einsetzt, endet dein Zug."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Storm Slash",
			'fr-fr': "Tranche Tempête",
			'es-es': "Estocada Tormentosa",
			'it-it': "Laceratempesta",
			'pt-br': "Talho Tempestuoso",
			'de-de': "Sturmschlitzer"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each Psychic Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Psychic attachée à ce Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía Psychic unida a este Pokémon.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia Psychic assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia Psychic ligada a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Psychic-Energie 30 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691928,
				tcgplayer: 478075
			}
		},
	],
}

export default card
