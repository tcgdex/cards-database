import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Nostenfer V",
		en: "Crobat V",
		es: "Crobat V",
		it: "Crobat V",
		pt: "Crobat V",
		de: "Iksbat V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Darkness"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Atout Obscur",
			en: "Dark Asset",
			es: "Recurso Oscuro",
			it: "Risorsa Oscura",
			pt: "Artefato Sombrio",
			de: "Finstere Bereicherung"
		},

		effect: {
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez piocher des cartes jusqu’à en avoir 6 en main. Vous ne pouvez utiliser qu’un talent Atout Obscur par tour.",
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may draw cards until you have 6 cards in your hand. You can’t use more than 1 Dark Asset Ability each turn.",
			es: "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes robar cartas hasta que tengas 6 cartas en tu mano. No puedes usar más de 1 habilidad Recurso Oscuro en cada turno.",
			it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi pescare fino ad avere sei carte in mano. Puoi usare l’abilità Risorsa Oscura solo una volta per turno.",
			pt: "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá comprar cartas até ter 6 cartas na sua mão. Você não pode usar mais de 1 Habilidade Artefato Sombrio por turno.",
			de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du so lange Karten ziehen, bis du 6 Karten auf deiner Hand hast. Du kannst die Fähigkeit Finstere Bereicherung nur einmal pro Zug einsetzen."
		}
	}],

	attacks: [{
		name: {
			fr: "Croc-Poison",
			en: "Venomous Fang",
			es: "Colmillo Nocivo",
			it: "Dentevelenoso",
			pt: "Dente Venenoso",
			de: "Gifthauer"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			en: "Your opponent’s Active Pokémon is now Poisoned.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 70,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V"
}

export default card