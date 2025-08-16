import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [898],
	set: Set,

	name: {
		en: "Calyrex",
		fr: "Sylveroy",
		es: "Calyrex",
		it: "Calyrex",
		pt: "Calyrex",
		de: "Coronospa"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "King's Instructions",
			fr: "Consignes du Roi",
			es: "Instrucciones del Rey",
			it: "Ordini del Re",
			pt: "Orientações do Rei",
			de: "Königlicher Bescheid"
		},

		effect: {
			en: "You may search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			fr: "Vous pouvez chercher dans votre deck jusqu'à 2 cartes, puis les ajouter à votre main. Mélangez ensuite votre deck.",
			es: "Puedes buscar en tu baraja hasta 2 cartas y ponerlas en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Puoi cercare nel tuo mazzo fino a due carte e aggiungerle a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Você pode procurar por até 2 cartas no seu baralho e colocá-las na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Du kannst dein Deck nach bis zu 2 Karten durchsuchen und sie auf deine Hand nehmen. Mische anschließend dein Deck."
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Bloomshine",
			fr: "Éclobrillance",
			es: "Resplandeflor",
			it: "Fioritura Splendente",
			pt: "Brilho Florido",
			de: "Blütenglanz"
		},

		effect: {
			en: "Heal 20 damage from each of your Pokémon.",
			fr: "Soignez 20 dégâts de chacun de vos Pokémon.",
			es: "Cura 20 puntos de daño a cada uno de tus Pokémon.",
			it: "Cura ciascuno dei tuoi Pokémon da 20 danni.",
			pt: "Cure 20 pontos de dano de cada um dos seus Pokémon.",
			de: "Heile 20 Schadenspunkte bei jedem deiner Pokémon."
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 691734,
		tcgplayer: 478089
	}
}

export default card
