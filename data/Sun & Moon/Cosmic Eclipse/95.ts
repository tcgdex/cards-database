import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Oricorio GX",
		fr: "Plumeline GX",
		es: "Oricorio GX",
		it: "Oricorio GX",
		pt: "Oricorio GX",
		de: "Choreogel GX"
	},

	illustrator: "aky CG Works",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		741,
	],

	hp: 170,

	types: [
		"Psychic",
	],

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dance of Tribute",
				fr: "Danse Respectueuse",
				es: "Danza de Homenaje",
				it: "Danza del Tributo",
				pt: "Dança dos Tributos",
				de: "Tributtanz"
			},
			effect: {
				en: "Once during your turn (before your attack), if any of your Pokémon were Knocked Out during your opponent’s last turn, you may draw 3 cards. You can’t use more than 1 Dance of Tribute Ability each turn.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si l’un de vos Pokémon a été mis K.O. pendant le dernier tour de votre adversaire, vous pouvez piocher 3 cartes. Vous ne pouvez pas utiliser plus d’un talent Danse Respectueuse par tour.",
				es: "Una vez durante tu turno (antes de tu ataque), si alguno de tus Pokémon quedó Fuera de Combate durante el último turno de tu rival, puedes robar 3 cartas. No puedes usar más de 1 habilidad Danza de Homenaje en cada turno.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se uno qualsiasi dei tuoi Pokémon è stato messo KO durante l’ultimo turno del tuo avversario, puoi pescare tre carte. Puoi usare l’abilità Danza del Tributo solo una volta per turno.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), se algum dos seus Pokémon tiver sido Nocauteado durante a última vez de jogar do seu oponente, você poderá comprar 3 cartas. Você não pode usar mais de 1 Habilidade Dança dos Tributos por rodada.",
				de: "Einmal während deines Zuges (bevor du angreifst), wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners kampfunfähig wurde, kannst du 3 Karten ziehen. Du kannst die Fähigkeit Tributtanz nur einmal pro Zug einsetzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Razor Wing",
				fr: "Aile Tranchante",
				es: "Ala Cortante",
				it: "Ala Tagliente",
				pt: "Asa Cortante",
				de: "Rasierflügel"
			},

			damage: 80,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Strafe GX",
				fr: "Bombarder GX",
				es: "Pasada de Ataque GX",
				it: "Mitragliare GX",
				pt: "Bombardear GX",
				de: "Beharken GX"
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Cambia este Pokémon por 1 de tus Pokémon en Banca. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Scambia questo Pokémon con uno della tua panchina. Non puoi usare più di un attacco GX a partita.",
				pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco (você não pode usar mais de 1 ataque GX por partida).",
				de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 408119
	}
}

export default card
