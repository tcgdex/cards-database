import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [199],
	set: Set,

	name: {
		'fr-fr': "Roigada-ex",
		'en-us': "Slowking ex",
		'es-es': "Slowking ex",
		'it-it': "Slowking-ex",
		'pt-br': "Slowking ex",
		'de-de': "Laschoking-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],
	evolveFrom: {
		'fr-fr': "Ramoloss",
		'en-us': "Slowpoke",
		'es-es': "Slowpoke",
		'it-it': "Slowpoke",
		'pt-br': "Slowpoke",
		'de-de': "Flegmon"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'fr-fr': "Connaissance Profonde",
			'en-us': "Profound Knowledge",
			'es-es': "Conocimiento Profundo",
			'it-it': "Conoscenza Profonda",
			'pt-br': "Conhecimento Profundo",
			'de-de': "Tiefes Wissen"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 30
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			'fr-fr': "Coup d'Boule Avisé",
			'en-us': "Wise Headbutt",
			'es-es': "Cabezazo Sensato",
			'it-it': "Cozzata Saggia",
			'pt-br': "Cabeçada Sábia",
			'de-de': "Weise Kopfnuss"
		},

		effect: {
			'fr-fr': "Vous pouvez chercher dans votre deck jusqu'à 2 cartes, puis les ajouter à votre main. Mélangez ensuite votre deck.",
			'en-us': "You may search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			'es-es': "Puedes buscar en tu baraja hasta 2 cartas y ponerlas en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Puoi cercare nel tuo mazzo fino a due carte e aggiungerle a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Você pode procurar por até 2 cartas no seu baralho e colocá-las na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Du kannst dein Deck nach bis zu 2 Karten durchsuchen und sie auf deine Hand nehmen. Mische anschließend dein Deck."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715713,
				tcgplayer: 497646,
				cardtrader: 248894
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

	
}

export default card
