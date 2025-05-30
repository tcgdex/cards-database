import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	stage: "Basic",

	name: {
		en: "Crobat V",
		fr: "Nostenfer V",
		de: "Iksbat V",
		es: "Crobat V",
		pt: "Crobat V",
		it: "Crobat V"
	},

	rarity: "None",
	dexId: [169],
	hp: 180,
	types: ["Darkness"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Dark Asset",
			fr: "Atout Obscur",
			de: "Finstere Bereicherung",
			es: "Recurso Oscuro",
			pt: "Artefato Sombrio",
			it: "Risorsa Oscura"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may draw cards until you have 6 cards in your hand. You can't use more than 1 Dark Asset Ability each turn.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez piocher des cartes jusqu'à en avoir 6 en main. Vous ne pouvez utiliser qu'un talent Atout Obscur par tour.",
			de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du so lange Karten ziehen, bis du 6 Karten auf deiner Hand hast. Du kannst die Fähigkeit Finstere Bereicherung nur einmal pro Zug einsetzen.",
			es: "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes robar cartas hasta que tengas 6 cartas en tu mano. No puedes usar más de 1 habilidad Recurso Oscuro en cada turno.",
			pt: "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá comprar cartas até ter 6 cartas na sua mão. Você não pode usar mais de 1 Habilidade Artefato Sombrio por turno.",
			it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi pescare fino ad avere sei carte in mano. Puoi usare l'abilità Risorsa Oscura solo una volta per turno."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Venomous Fang",
			fr: "Croc-Poison",
			de: "Gifthauer",
			es: "Colmillo Nocivo",
			pt: "Dente Venenoso",
			it: "Dentevelenoso"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato."
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",
	suffix: "V"
}

export default card
