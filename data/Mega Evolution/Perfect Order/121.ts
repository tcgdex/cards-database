import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Meowth ex",
		fr: "Miaouss-ex",
		es: "Meowth ex",
		'es-mx': "Meowth ex",
		de: "Mauzi-ex",
		it: "Meowth-ex",
		pt: "Meowth ex"
	},

	illustrator: "Natsumi Yoshida",
	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 170,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Last-Ditch Catch",
			fr: "Prise Dernier Ressort",
			es: "Captura a la Desesperada",
			'es-mx': "Captura Al Límite",
			de: "Fang aus der Not",
			it: "Cattura in Extremis",
			pt: "Chance Final de Captura"
		},

		effect: {
			en: "Once during your turn, when you play this Pokémon from your hand onto your Bench, you may use this Ability. Search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck. You can't use more than 1 Ability that has \"Last-Ditch\" in its name each turn.",
			fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez utiliser ce talent. Cherchez dans votre deck une carte Supporter, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck. Vous ne pouvez utiliser qu'un talent ayant \" Dernier Ressort \" dans son nom par tour.",
			es: "Una vez durante tu turno, cuando juegas este Pokémon de tu mano a tu Banca, puedes usar esta habilidad. Busca en tu baraja 1 carta de Partidario, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja. No puedes usar más de una habilidad que tenga \"a la Desesperada\" en su nombre en cada turno.",
			'es-mx': "Una vez durante tu turno, cuando juegas este Pokémon de tu mano a tu Banca, puedes usar esta Habilidad. Busca en tu mazo 1 carta de Partidario, muéstrala y ponla en tu mano. Después, baraja tu mazo. No puedes usar más de 1 Habilidad que tenga \"Al Límite\" en su nombre en cada turno.",
			de: "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand auf deine Bank spielst, kannst du diese Fähigkeit einsetzen. Durchsuche dein Deck nach 1 Unterstützerkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck. Du kannst nur 1 Fähigkeit, bei der \"aus der Not\" zum Namen gehört, pro Zug einsetzen.",
			it: "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano e lo metti in panchina, puoi usare questa abilità. Cerca nel tuo mazzo una carta Aiuto, mostrala e aggiungila alle carte che hai in mano. Poi rimischia il tuo mazzo. Non puoi usare più di un'abilità che ha \"in Extremis\" nel nome per turno.",
			pt: "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para o seu Banco, você poderá usar esta Habilidade. Procure por uma carta de Apoiador no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho. Você não pode usar mais de 1 Habilidade que tem \"Chance Final\" em seu nome por turno."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Tuck Tail",
			fr: "Queue Repliée",
			es: "Cola Asustadiza",
			'es-mx': "Cola entre las Patas",
			de: "Schweif einziehen",
			it: "Ritiracoda",
			pt: "Rabo Entre as Pernas"
		},

		effect: {
			en: "Put this Pokémon and all attached cards into your hand.",
			fr: "Ajoutez à votre main ce Pokémon et toutes les cartes qui lui sont attachées.",
			es: "Pon este Pokémon y todas las cartas unidas a él en tu mano.",
			'es-mx': "Pon este Pokémon y todas las cartas unidas a él en tu mano.",
			de: "Nimm dieses Pokémon und alle angelegten Karten auf deine Hand.",
			it: "Riprendi in mano questo Pokémon e tutte le carte a esso assegnate.",
			pt: "Coloque este Pokémon e todas as cartas ligadas a ele na sua mão."
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo"
		}
	],

	thirdParty: {
		tcgplayer: 684342,
		cardmarket: 877538
	}
}

export default card
