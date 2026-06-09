import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886430,
				tcgplayer: 693531
			}
		},
	],

	name: {
		en: "Phantump",
		fr: "Brocélôme",
		es: "Phantump",
		'es-mx': "Phantump",
		de: "Paragoni",
		it: "Phantump",
		pt: "Phantump"
	},

	illustrator: "Taiga Kasai",
	rarity: "Common",
	category: "Pokemon",
	dexId: [708],
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Spiteful Evolution",
			fr: "Évolution Malveillante",
			es: "Evolución Malévola",
			'es-mx': "Evolución Rencorosa",
			de: "Tückische Entwicklung",
			it: "Evoluzione Dispettosa",
			pt: "Evolução Rancorosa"
		},

		effect: {
			en: "Once during your turn, you may use this Ability. Choose a card in your hand that evolves from this Pokémon and put it onto this Pokémon to evolve it. If you do, place 2 damage counters on the Pokémon you evolved in this way. You can't use this Ability during your first turn.",
			fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Choisissez dans votre main une carte qui évolue de ce Pokémon, puis placez-la sur ce Pokémon pour le faire évoluer. Dans ce cas, placez 2 marqueurs de dégâts sur le Pokémon que vous avez fait évoluer de cette façon. Vous ne pouvez pas utiliser ce talent pendant votre premier tour.",
			es: "Una vez durante tu turno, puedes usar esta habilidad. Elige 1 carta de tu mano que evolucione de este Pokémon y ponla sobre este Pokémon para hacerlo evolucionar. Si lo haces, pon 2 contadores de daño en el Pokémon que hayas hecho evolucionar de esta manera. No puedes usar esta habilidad durante tu primer turno.",
			'es-mx': "Una vez durante tu turno, puedes usar esta Habilidad. Elige 1 carta de tu mano que evolucione de este Pokémon y ponla sobre este Pokémon para hacerlo evolucionar. Si lo haces, pon 2 contadores de daño en el Pokémon que hiciste evolucionar de esta manera. No puedes usar esta Habilidad durante tu primer turno.",
			de: "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Wähle 1 Karte auf deiner Hand, die sich aus diesem Pokémon entwickelt, und lege sie auf dieses Pokémon, um es zu entwickeln. Wenn du das machst, lege 2 Schadensmarken auf das Pokémon, das du auf diese Weise entwickelt hast. Du kannst diese Fähigkeit nicht während deines ersten Zuges einsetzen.",
			it: "Una sola volta durante il tuo turno, puoi usare questa abilità. Scegli una carta che hai in mano che si evolve da questo Pokémon e mettila sopra questo Pokémon per farlo evolvere. Se lo fai, metti due segnalini danno sul Pokémon che hai fatto evolvere in questo modo. Non puoi usare questa abilità durante il tuo primo turno.",
			pt: "Uma vez durante o seu turno, você poderá usar esta Habilidade. Escolha uma carta na sua mão que evolua deste Pokémon e coloque-a sobre este Pokémon para evoluí-lo. Se fizer isso, coloque 2 contadores de dano no Pokémon que você evoluiu desta forma. Você não pode usar esta Habilidade durante o seu primeiro turno."
		}
	}],

	attacks: [{
		name: {
			en: "Mumble",
			fr: "Murmure",
			es: "Farfullar",
			'es-mx': "Murmurar",
			de: "Grummeln",
			it: "Borbottio",
			pt: "Resmungo"
		},

		cost: ["Psychic"],
		damage: 10
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",
}

export default card