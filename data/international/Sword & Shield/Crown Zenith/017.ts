import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [898],
	set: Set,

	name: {
		'en-us': "Calyrex",
		'fr-fr': "Sylveroy",
		'es-es': "Calyrex",
		'it-it': "Calyrex",
		'pt-br': "Calyrex",
		'de-de': "Coronospa"
	},

	illustrator: "Nurikabe",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "King's Instructions",
			'fr-fr': "Consignes du Roi",
			'es-es': "Instrucciones del Rey",
			'it-it': "Ordini del Re",
			'pt-br': "Orientações do Rei",
			'de-de': "Königlicher Bescheid"
		},

		effect: {
			'en-us': "You may search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Vous pouvez chercher dans votre deck jusqu'à 2 cartes, puis les ajouter à votre main. Mélangez ensuite votre deck.",
			'es-es': "Puedes buscar en tu baraja hasta 2 cartas y ponerlas en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Puoi cercare nel tuo mazzo fino a due carte e aggiungerle a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Você pode procurar por até 2 cartas no seu baralho e colocá-las na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Du kannst dein Deck nach bis zu 2 Karten durchsuchen und sie auf deine Hand nehmen. Mische anschließend dein Deck."
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Bloomshine",
			'fr-fr': "Éclobrillance",
			'es-es': "Resplandeflor",
			'it-it': "Fioritura Splendente",
			'pt-br': "Brilho Florido",
			'de-de': "Blütenglanz"
		},

		effect: {
			'en-us': "Heal 20 damage from each of your Pokémon.",
			'fr-fr': "Soignez 20 dégâts de chacun de vos Pokémon.",
			'es-es': "Cura 20 puntos de daño a cada uno de tus Pokémon.",
			'it-it': "Cura ciascuno dei tuoi Pokémon da 20 danni.",
			'pt-br': "Cure 20 pontos de dano de cada um dos seus Pokémon.",
			'de-de': "Heile 20 Schadenspunkte bei jedem deiner Pokémon."
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "Calyrex is a merciful Pokémon, capable of providing healing and blessings. It reigned over the Galar region in times of yore.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691734,
				tcgplayer: 478089
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691734,
				tcgplayer: 478089
			}
		},
	],
}

export default card
