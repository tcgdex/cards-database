import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [637],
	set: Set,

	name: {
		en: "Volcarona",
		fr: "Pyrax",
		de: "Ramoth",
		it: "Volcarona",
		pt: "Volcarona",
		es: "Volcarona",
		'es-mx': "Volcarona"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	evolveFrom: {
		en: "Larvesta",
		fr: "Pyronille",
		de: "Ignivor",
		it: "Larvesta",
		pt: "Larvesta",
		es: "Larvesta",
		"es-mx": "Larvesta"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Torrid Scales",
			fr: "Écailles Bouillantes",
			de: "Heiße Schuppen",
			it: "Scaglie Roventi",
			pt: "Escamas Incandescentes",
			es: "Escamas Sofocantes",
			'es-mx': "Escamas Tórridas"
		},

		effect: {
			en: "You must discard a Basic {R} Energy card from your hand in order to use this Ability. Once during your turn, you may make your opponent's Active Pokémon Burned.",
			fr: "Vous devez défausser une carte Énergie {R} de base de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez laisser le Pokémon Actif de votre adversaire Brûlé.",
			de: "Du musst 1 Basis-{R}-Energiekarte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du das Aktive Pokémon deines Gegners verbrennen.",
			it: "Devi scartare una carta Energia base {R} che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi lasciare il Pokémon attivo del tuo avversario bruciato.",
			pt: "Você deve descartar uma carta de Energia {R} Básica da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá deixar o Pokémon Ativo do seu oponente Queimado.",
			es: "Debes descartar 1 carta de Energía {R} Básica de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes dejar al Pokémon Activo de tu rival Quemado.",
			'es-mx': "Debes descartar 1 carta de Energía {R} Básica de tu mano para poder usar esta Habilidad. Una vez durante tu turno, puedes dejar Quemado al Pokémon Activo de tu rival."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Fire Wing",
			fr: "Aile de Feu",
			de: "Feuerflügel",
			it: "Alafiamma",
			pt: "Asa de Fogo",
			es: "Ala Ígnea",
			'es-mx': "Ala Ígnea"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836107
	}
}

export default card