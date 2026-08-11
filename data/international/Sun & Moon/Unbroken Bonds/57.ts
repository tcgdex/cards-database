import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Dedenne GX",
		'fr-fr': "Dedenne GX",
		'es-es': "Dedenne GX",
		'it-it': "Dedenne GX",
		'pt-br': "Dedenne GX",
		'de-de': "Dedenne GX"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		702,
	],

	hp: 160,

	types: [
		"Lightning",
	],

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Dedechange",
				'fr-fr': "Dedechange",
				'es-es': "Dedecambio",
				'it-it': "Dedescambio",
				'pt-br': "Mudedenne",
				'de-de': "Dedewechsel"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may discard your hand and draw 6 cards. You can’t use more than 1 Dedechange Ability each turn.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez défausser votre main et piocher 6 cartes. Vous ne pouvez pas utiliser plus d’un talent Dedechange par tour.",
				'es-es': "Cuando juegues este Pokémon de tu mano a tu Banca durante tu turno, puedes descartar las cartas de tu mano y robar 6 cartas. No puedes usar más de 1 habilidad Dedecambio en cada turno.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi scartare le carte che hai in mano e pescare sei carte. Puoi usare l’abilità Dedescambio solo una volta per turno.",
				'pt-br': "Quando você joga este Pokémon da sua mão para o seu Banco durante a sua vez de jogar, você pode descartar a sua mão e comprar 6 cartas. Você não pode usar mais de 1 Habilidade Mudedenne por rodada.",
				'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du deine Handkarten auf deinen Ablagestapel legen und 6 Karten ziehen. Du kannst die Fähigkeit Dedewechsel nur einmal pro Zug einsetzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Static Shock",
				'fr-fr': "Choc Statique",
				'es-es': "Impacto Estático",
				'it-it': "Shock Statico",
				'pt-br': "Choque de Estática",
				'de-de': "Statischer Schock"
			},

			damage: 50,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Tingly Return GX",
				'fr-fr': "Retour Picotant GX",
				'es-es': "Vuelta Electrizante GX",
				'it-it': "Dinamoritorno GX",
				'pt-br': "Retorno Formigante GX",
				'de-de': "Prickelnde Rückkehr GX"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Paralyzed. Put this Pokémon and all cards attached to it into your hand. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Paralysé. Placez ce Pokémon et toutes les cartes qui lui sont attachées dans votre main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Paralizado. Pon este Pokémon y todas las cartas unidas a él en tu mano. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Il Pokémon attivo del tuo avversario viene paralizzato. Riprendi in mano questo Pokémon e tutte le carte a esso assegnate. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Paralisado. Coloque este Pokémon e todas as cartas ligadas a ele na sua mão (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt paralysiert. Nimm dieses Pokémon und alle an es angelegten Karten auf deine Hand. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 372212,
		tcgplayer: 189156
	}
}

export default card
