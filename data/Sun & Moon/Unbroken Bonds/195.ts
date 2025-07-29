import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Dedenne GX",
		fr: "Dedenne GX",
		es: "Dedenne GX",
		it: "Dedenne GX",
		pt: "Dedenne GX",
		de: "Dedenne GX"
	},

	illustrator: "5ban Graphics",
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
				en: "Dedechange",
				fr: "Dedechange",
				es: "Dedecambio",
				it: "Dedescambio",
				pt: "Mudedenne",
				de: "Dedewechsel"
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may discard your hand and draw 6 cards. You can’t use more than 1 Dedechange Ability each turn.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez défausser votre main et piocher 6 cartes. Vous ne pouvez pas utiliser plus d’un talent Dedechange par tour.",
				es: "Cuando juegues este Pokémon de tu mano a tu Banca durante tu turno, puedes descartar las cartas de tu mano y robar 6 cartas. No puedes usar más de 1 habilidad Dedecambio en cada turno.",
				it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi scartare le carte che hai in mano e pescare sei carte. Puoi usare l’abilità Dedescambio solo una volta per turno.",
				pt: "Quando você joga este Pokémon da sua mão para o seu Banco durante a sua vez de jogar, você pode descartar a sua mão e comprar 6 cartas. Você não pode usar mais de 1 Habilidade Mudedenne por rodada.",
				de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du deine Handkarten auf deinen Ablagestapel legen und 6 Karten ziehen. Du kannst die Fähigkeit Dedewechsel nur einmal pro Zug einsetzen."
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
				en: "Static Shock",
				fr: "Choc Statique",
				es: "Impacto Estático",
				it: "Shock Statico",
				pt: "Choque de Estática",
				de: "Statischer Schock"
			},

			damage: 50,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Tingly Return GX",
				fr: "Retour Picotant GX",
				es: "Vuelta Electrizante GX",
				it: "Dinamoritorno GX",
				pt: "Retorno Formigante GX",
				de: "Prickelnde Rückkehr GX"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Paralyzed. Put this Pokémon and all cards attached to it into your hand. (You can’t use more than 1 GX attack in a game.)",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Paralysé. Placez ce Pokémon et toutes les cartes qui lui sont attachées dans votre main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "El Pokémon Activo de tu rival pasa a estar Paralizado. Pon este Pokémon y todas las cartas unidas a él en tu mano. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Il Pokémon attivo del tuo avversario viene paralizzato. Riprendi in mano questo Pokémon e tutte le carte a esso assegnate. Non puoi usare più di un attacco GX a partita.",
				pt: "O Pokémon Ativo do seu oponente agora está Paralisado. Coloque este Pokémon e todas as cartas ligadas a ele na sua mão (você não pode usar mais de 1 ataque GX por partida).",
				de: "Das Aktive Pokémon deines Gegners ist jetzt paralysiert. Nimm dieses Pokémon und alle an es angelegten Karten auf deine Hand. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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
		cardmarket: 372212
	}
}

export default card
