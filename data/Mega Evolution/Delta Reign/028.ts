import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Jellicent",
		fr: "Moyade",
		de: "Apoquallyp",
		es: "Jellicent",
		it: "Jellicent",
		pt: "Jellicent",
		'es-mx': "Jellicent"
	},

	illustrator: "Nurikabe",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Deep Sea Draw",
			fr: "Pioche Abyssale",
			de: "Tiefseefischzug",
			es: "Robo Abisal",
			it: "Pesca Abissale",
			pt: "Compra do Fundo do Mar",
			'es-mx': "Robo Abisal"
		},

		effect: {
			en: "Once during your turn, you may use this Ability.		Draw a card. If you do, you may put a card from your hand on the bottom of your deck.",
			fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Piochez une carte. Dans ce cas, vous pouvez placer une carte de votre main en dessous de votre deck.",
			de: "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Ziehe 1 Karte. Wenn du das machst, kannst du 1 Karte aus deiner Hand unter dein Deck legen.",
			es: "Una vez durante tu turno, puedes usar esta habilidad. Roba 1 carta. Si lo haces, puedes poner 1 carta de tu mano en la parte inferior de tu baraja.",
			it: "Una sola volta durante il tuo turno, puoi usare questa abilità.		Pesca una carta. Se lo fai, puoi prendere una carta che hai in mano e metterla in fondo al tuo mazzo.",
			pt: "Uma vez durante o seu turno, você poderá usar esta Habilidade. Compre uma carta. Se fizer isso, você poderá colocar uma carta da sua mão como a carta de baixo do seu baralho.",
			'es-mx': "Una vez durante tu turno, puedes usar esta Habilidad. Roba 1 carta. Si lo haces, puedes poner 1 carta de tu mano en la parte inferior de tu mazo."
		}
	}],

	attacks: [{
		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
			de: "Sanfter Hieb",
			es: "Bofetada Gentil",
			it: "Schiaffetto",
			pt: "Tapinha",
			'es-mx': "Cachetadita"
		},

		damage: 100,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,

	thirdParty: {
		tcgplayer: 727580,
		cardmarket: 918843
	}
}

export default card