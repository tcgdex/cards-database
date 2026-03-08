import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [199],
	set: Set,

	name: {
		fr: "Roigada-ex",
		en: "Slowking ex",
		es: "Slowking ex",
		it: "Slowking-ex",
		pt: "Slowking ex",
		de: "Laschoking-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],
	evolveFrom: {
		fr: "Ramoloss",
		en: "Slowpoke",
		es: "Slowpoke",
		it: "Slowpoke",
		pt: "Slowpoke",
		de: "Flegmon"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			fr: "Connaissance Profonde",
			en: "Profound Knowledge",
			es: "Conocimiento Profundo",
			it: "Conoscenza Profonda",
			pt: "Conhecimento Profundo",
			de: "Tiefes Wissen"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			en: "Your opponent's Active Pokémon is now Confused.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 30
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			fr: "Coup d'Boule Avisé",
			en: "Wise Headbutt",
			es: "Cabezazo Sensato",
			it: "Cozzata Saggia",
			pt: "Cabeçada Sábia",
			de: "Weise Kopfnuss"
		},

		effect: {
			fr: "Vous pouvez chercher dans votre deck jusqu'à 2 cartes, puis les ajouter à votre main. Mélangez ensuite votre deck.",
			en: "You may search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			es: "Puedes buscar en tu baraja hasta 2 cartas y ponerlas en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Puoi cercare nel tuo mazzo fino a due carte e aggiungerle a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Você pode procurar por até 2 cartas no seu baralho e colocá-las na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Du kannst dein Deck nach bis zu 2 Karten durchsuchen und sie auf deine Hand nehmen. Mische anschließend dein Deck."
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "5ban Graphics",

	thirdParty: {
		cardmarket: 715561
	}
}

export default card