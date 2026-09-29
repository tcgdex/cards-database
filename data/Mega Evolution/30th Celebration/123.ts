import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "With its disheveled white fur, it looks like an embodiment of death. Heedless of its own safety, Zoroark attacks its nemeses with a bitter energy so intense, it lacerates Zoroark's own body."
	},

	name: {
		en: "Hisuian Zoroark",
		fr: "Zoroark de Hisui",
		de: "Hisui-Zoroark",
		es: "Zoroark de Hisui",
		it: "Zoroark di Hisui",
		'es-mx': "Zoroark de Hisui",
		pt: "Zoroark de Hisui"
	},

	illustrator: "Kamome Shirahama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [571],
	hp: 120,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Scratch",
			fr: "Griffe",
			de: "Kratzer",
			es: "Arañazo",
			it: "Graffio",
			'es-mx': "Arañazo",
			pt: "Arranhão"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Swirling Resentment",
			fr: "Ressentiment Tourbillonnant",
			de: "Wirbelnder Groll",
			es: "Rencor en Espiral",
			it: "Rancore Vorticoso",
			'es-mx': "Rencor Espiral",
			pt: "Rancor Rodopiante"
		},

		effect: {
			en: "Place damage counters on your opponent's Active Pokémon until its remaining HP is 50.",
			fr: "Placez des marqueurs de dégâts sur le Pokémon Actif de votre adversaire jusqu'à ce qu'il lui reste 50 PV.",
			de: "Lege so lange Schadensmarken auf das Aktive Pokémon deines Gegners, bis seine verbleibenden KP gleich 50 sind.",
			es: "Pon contadores de daño en el Pokémon Activo de tu rival hasta que le queden 50 PS.",
			it: "Metti dei segnalini danno sul Pokémon attivo del tuo avversario finché i suoi PS rimanenti diventano 50.",
			'es-mx': "Pon contadores de daño en el Pokémon Activo de tu rival hasta que le queden 50 PS.",
			pt: "Coloque contadores de dano no Pokémon Ativo do seu oponente até o PS restante dele ser 50."
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907730,
				tcgplayer: 716512
			}
		}
	],
}

export default card
