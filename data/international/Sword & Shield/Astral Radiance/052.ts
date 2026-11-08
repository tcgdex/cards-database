import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [157],
	set: Set,

	name: {
		'en-us': "Hisuian Typhlosion",
		'fr-fr': "Typhlosion de Hisui",
		'es-es': "Typhlosion de Hisui",
		'it-it': "Typhlosion di Hisui",
		'pt-br': "Typhlosion de Hisui",
		'de-de': "Hisui-Tornupto"
	},

	illustrator: "Kouki Saitou",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Quilava",
		'fr-fr': "Feurisson",
		'es-es': "Quilava",
		'it-it': "Quilava",
		'pt-br': "Quilava",
		'de-de': "Igelavar"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Supernatural Orb",
			'fr-fr': "Orbe Surnaturel",
			'es-es': "Orbe Sobrenatural",
			'it-it': "Sfera Soprannaturale",
			'pt-br': "Esfera Sobrenatural",
			'de-de': "Übernatürlicher Orb"
		},

		effect: {
			'en-us': "You must discard a Psychic Energy card from your hand in order to use this Ability. Once during your turn, you may make your opponent's Active Pokémon Burned and Confused.",
			'fr-fr': "Vous devez défausser une carte Énergie Psychic de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez laisser le Pokémon Actif de votre adversaire Brûlé et Confus.",
			'es-es': "Debes descartar 1 carta de Energía Psychic de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes dejar al Pokémon Activo de tu rival Confundido y Quemado.",
			'it-it': "Devi scartare una carta Energia Psychic che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi lasciare il Pokémon attivo del tuo avversario bruciato e confuso.",
			'pt-br': "Você deve descartar 1 carta de Energia Psychic da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá deixar o Pokémon Ativo do seu oponente Confuso e Queimado.",
			'de-de': "Du musst 1 Psychic-Energiekarte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du das Aktive Pokémon deines Gegners verbrennen und verwirren."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Shadow Bind",
			'fr-fr': "Étreinte d'Ombre",
			'es-es': "Atadura Sombría",
			'it-it': "Legami d'Ombra",
			'pt-br': "Aprisionamento Sombrio",
			'de-de': "Schattenbindung"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 90
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
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Said to purify lost, forsaken souls with its flames and guide them to the afterlife. I believe its form has been influenced by the energy of the sacred mountain towering at Hisui's center.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658603,
				tcgplayer: 272253
			}
		},
		{
			type: 'holo',
			stamp: ['set-logo'],
			thirdParty: {
				cardmarket: 660427
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658603,
				tcgplayer: 272253
			}
		},
	],
}

export default card
