import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [169],
	set: Set,

	name: {
		'fr-fr': "Nostenfer V",
		'en-us': "Crobat V",
		'es-es': "Crobat V",
		'it-it': "Crobat V",
		'pt-br': "Crobat V",
		'de-de': "Iksbat V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 180,
	types: ["Darkness"],

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Atout Obscur",
			'en-us': "Dark Asset",
			'es-es': "Recurso Oscuro",
			'it-it': "Risorsa Oscura",
			'pt-br': "Artefato Sombrio",
			'de-de': "Finstere Bereicherung"
		},

		effect: {
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez piocher des cartes jusqu'à en avoir 6 en main. Vous ne pouvez utiliser qu'un talent Atout Obscur par tour.",
			'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may draw cards until you have 6 cards in your hand. You can't use more than 1 Dark Asset Ability each turn.",
			'es-es': "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes robar cartas hasta que tengas 6 cartas en tu mano. No puedes usar más de 1 habilidad Recurso Oscuro en cada turno.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi pescare fino ad avere sei carte in mano. Puoi usare l'abilità Risorsa Oscura solo una volta per turno.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá comprar cartas até ter 6 cartas na sua mão. Você não pode usar mais de 1 Habilidade Artefato Sombrio por turno.",
			'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du so lange Karten ziehen, bis du 6 Karten auf deiner Hand hast. Du kannst die Fähigkeit Finstere Bereicherung nur einmal pro Zug einsetzen."
		}
	}],

	attacks: [{
		name: {
			'fr-fr': "Croc-Poison",
			'en-us': "Venomous Fang",
			'es-es': "Colmillo Nocivo",
			'it-it': "Dentevelenoso",
			'pt-br': "Dente Venenoso",
			'de-de': "Gifthauer"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
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


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539243,
				tcgplayer: 232512
			}
		},
	],
}

export default card
