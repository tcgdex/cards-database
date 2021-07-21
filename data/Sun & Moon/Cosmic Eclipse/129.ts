import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Alolan Persian-GX",
		fr: "Persian d’Alola-GX",
		es: "Persian de Alola-GX",
		it: "Persian di Alola-GX",
		pt: "Persian de Alola-GX",
		de: "Alola-Snobilikat-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		53,
	],
	hp: 200,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Alolan Meowth",
		fr: "Miaouss d’Alola",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Smug Face",
				fr: "Gros Malin",
				es: "Cara Engreída",
				it: "Espressione Compiaciuta",
				pt: "Esnobe",
				de: "Selbstgefälliges Lächeln"
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to this Pokémon by your opponent’s TAG TEAM Pokémon and Ultra Beasts, and by your opponent’s Pokémon that have any Special Energy attached to them.",
				fr: "Évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon par les Pokémon ESCOUADE et Ultra-Chimères de votre adversaire, et par les Pokémon de votre adversaire auxquels de l’Énergie spéciale est attachée.",
				es: "Evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon por los Pokémon de equipo de RELEVOS y Ultraentes de tu rival, y por los Pokémon de tu rival que tengan alguna Energía Especial unida a ellos.",
				it: "Previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon dai Pokémon ALLEATI e dalle Ultracreature del tuo avversario, e dai Pokémon del tuo avversario che hanno Energie speciali assegnate.",
				pt: "Previne todos os efeitos de ataques, incluindo dano, causados a este Pokémon pelos Pokémon ALIADOS, Ultracriaturas e Pokémon que tenham alguma Energia Especial ligada a eles do seu oponente.",
				de: "Verhindere alle Effekte von Attacken, einschließlich Schaden, die diesem Pokémon durch {TAG TEAM} Pokémon und Ultrabestien deines Gegners sowie durch Pokémon deines Gegners, an die mindestens 1 Spezial-Energie angelegt ist, zugefügt werden."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Claw Slash",
				fr: "Tranch’Griffe",
				es: "Cuchillada Garra",
				it: "Lacerartiglio",
				pt: "Golpe de Garra",
				de: "Klauenschlitzer"
			},

			damage: 120,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stalking Claws GX",
				fr: "Griffes Traquantes GX",
				es: "Garras Acechantes GX",
				it: "Artigli Braccanti GX",
				pt: "Garras Assombrosas GX",
				de: "Lauernde Krallen GX"
			},
			effect: {
				en: "This attack does 120 damage to 1 of your opponent’s Pokémon. This damage isn’t affected by Weakness, Resistance, or any other effects on that Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 120 dégâts à l’un des Pokémon de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur ce Pokémon-là. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Este ataque hace 120 puntos de daño a 1 de los Pokémon de tu rival. Este daño no se ve afectado por Debilidad, Resistencia o cualquier otro efecto en ese Pokémon. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Questo attacco infligge 120 danni a uno dei Pokémon del tuo avversario. Questi danni non sono influenzati dalla debolezza, dalla resistenza o da qualsiasi altro effetto presente su quel Pokémon. Non puoi usare più di un attacco GX a partita.",
				pt: "Este ataque causa 120 pontos de dano a 1 dos Pokémon do seu oponente. Este dano não é afetado por Fraqueza, Resistência ou quaisquer outros efeitos naquele Pokémon (você não pode usar mais de 1 ataque GX por partida).",
				de: "Diese Attacke fügt 1 Pokémon deines Gegners 120 Schadenspunkte zu. Der Schaden dieser Attacke wird durch Schwäche, Resistenz oder alle anderen Effekte auf jenem Pokémon nicht verändert. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

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
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
