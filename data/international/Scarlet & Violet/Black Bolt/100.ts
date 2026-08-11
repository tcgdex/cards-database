import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [637],
	set: Set,

	name: {
		'en-us': "Volcarona",
		'fr-fr': "Pyrax",
		'de-de': "Ramoth",
		'it-it': "Volcarona",
		'pt-br': "Volcarona",
		'es-es': "Volcarona",
		'es-mx': "Volcarona"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Larvesta",
		'fr-fr': "Pyronille",
		'de-de': "Ignivor",
		'it-it': "Larvesta",
		'pt-br': "Larvesta",
		'es-es': "Larvesta",
		'es-mx': "Larvesta"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Torrid Scales",
			'fr-fr': "Écailles Bouillantes",
			'de-de': "Heiße Schuppen",
			'it-it': "Scaglie Roventi",
			'pt-br': "Escamas Incandescentes",
			'es-es': "Escamas Sofocantes",
			'es-mx': "Escamas Tórridas"
		},

		effect: {
			'en-us': "You must discard a Basic {R} Energy card from your hand in order to use this Ability. Once during your turn, you may make your opponent's Active Pokémon Burned.",
			'fr-fr': "Vous devez défausser une carte Énergie {R} de base de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez laisser le Pokémon Actif de votre adversaire Brûlé.",
			'de-de': "Du musst 1 Basis-{R}-Energiekarte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du das Aktive Pokémon deines Gegners verbrennen.",
			'it-it': "Devi scartare una carta Energia base {R} che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi lasciare il Pokémon attivo del tuo avversario bruciato.",
			'pt-br': "Você deve descartar uma carta de Energia {R} Básica da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá deixar o Pokémon Ativo do seu oponente Queimado.",
			'es-es': "Debes descartar 1 carta de Energía {R} Básica de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes dejar al Pokémon Activo de tu rival Quemado.",
			'es-mx': "Debes descartar 1 carta de Energía {R} Básica de tu mano para poder usar esta Habilidad. Una vez durante tu turno, puedes dejar Quemado al Pokémon Activo de tu rival."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Fire Wing",
			'fr-fr': "Aile de Feu",
			'de-de': "Feuerflügel",
			'it-it': "Alafiamma",
			'pt-br': "Asa de Fogo",
			'es-es': "Ala Ígnea",
			'es-mx': "Ala Ígnea"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836107,
				tcgplayer: 642553
			}
		},
	]
}

export default card
