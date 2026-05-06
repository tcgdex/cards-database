import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [493],
	set: Set,
	illustrator: "5ban Graphics",

	name: {
		en: "Arceus VSTAR",
		fr: "Arceus VSTAR",
		es: "Arceus V-ASTRO",
		it: "Arceus V ASTRO",
		pt: "Arceus V-ASTRO",
		de: "Arceus VSTAR"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 280,
	types: ["Colorless"],

	evolveFrom: {
		en: "Arceus V",
		fr: "Arceus-V",
		es: "Arceus V",
		it: "Arceus-V",
		pt: "Arceus V",
		de: "Arceus-V"
	},

	stage: "VSTAR",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			en: "Starbirth",
			fr: "Naissance Star",
			es: "Astroalbor",
			it: "Astro Nascita",
			pt: "Nascimento Astral",
			de: "Sternengeburt"
		},

		effect: {
			en: "During your turn, you may search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck. (You can't use more than 1 VSTAR Power in a game.)",
			fr: "Pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 2 cartes, puis les ajouter à votre main. Mélangez ensuite votre deck. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			es: "Durante tu turno, puedes buscar en tu baraja hasta 2 cartas y ponerlas en tu mano. Después, baraja las cartas de tu baraja. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			it: "Durante il tuo turno, puoi cercare nel tuo mazzo fino a due carte e aggiungerle a quelle che hai in mano. Poi rimischia le carte del tuo mazzo. Non puoi usare più di un Potere V ASTRO a partita.",
			pt: "Durante o seu turno, você poderá procurar por até 2 cartas no seu baralho e colocá-las na sua mão. Em seguida, embaralhe o seu baralho (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			de: "Während deines Zuges kannst du dein Deck nach bis zu 2 Karten durchsuchen und sie auf deine Hand nehmen. Mische anschließend dein Deck. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Trinity Nova",
			fr: "Nova Trinité",
			es: "Lucero Trinidad",
			it: "Nova Triade",
			pt: "Supernova Tríptica",
			de: "Nova der Dreiheit"
		},

		effect: {
			en: "Search your deck for up to 3 basic Energy cards and attach them to your Pokémon V in any way you like. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 3 cartes Énergie de base, puis attachez-les à vos Pokémon-V comme il vous plaît. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 3 cartas de Energía Básica y únelas a tus Pokémon V de la manera que desees. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a tre carte Energia base e assegnale ai tuoi Pokémon-V nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 3 cartas de Energia básica no seu baralho e ligue-as aos seus Pokémon V como desejar. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 3 Basis-Energiekarten und lege sie beliebig an deine Pokémon-V an. Mische anschließend dein Deck."
		},

		damage: 200
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "F"
}

export default card
