import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [770],
	set: Set,

	name: {
		'en-us': "Palossand ex",
		'fr-fr': "Trépassable-ex",
		'es-es': "Palossand ex",
		'it-it': "Palossand-ex",
		'pt-br': "Palossand ex",
		'de-de': "Colossand-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 280,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Sandygast",
		'fr-fr': "Bacabouh",
		'es-es': "Sandygast",
		'it-it': "Sandygast",
		'pt-br': "Sandygast",
		'de-de': "Sankabuh"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Sand Tomb",
			'fr-fr': "Tourbi-Sable",
			'es-es': "Bucle Arena",
			'it-it': "Sabbiotomba",
			'pt-br': "Fosso de Areia",
			'de-de': "Sandgrab"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 160
	}, {
		cost: ["Water", "Psychic", "Fighting"],

		name: {
			'en-us': "Barite Jail",
			'fr-fr': "Prison de Barytine",
			'es-es': "Prisión Barita",
			'it-it': "Sbarre di Barite",
			'pt-br': "Prisão de Barita",
			'de-de': "Baryt-Gefängnis"
		},

		effect: {
			'en-us': "Put damage counters on each of your opponent's Benched Pokémon until its remaining HP is 100.",
			'fr-fr': "Placez des marqueurs de dégâts sur chacun des Pokémon de Banc de votre adversaire jusqu'à ce qu'il ne lui reste que 100 PV.",
			'es-es': "Pon contadores de daño en cada uno de los Pokémon en Banca de tu rival hasta que le queden 100 PS a cada uno de ellos.",
			'it-it': "Metti dei segnalini danno su ciascuno dei Pokémon nella panchina del tuo avversario finché i suoi PS rimanenti diventano 100.",
			'pt-br': "Coloque contadores de dano em cada um dos Pokémon no Banco do seu oponente até o PS restante dele ser 100.",
			'de-de': "Lege so lange Schadensmarken auf jedes Pokémon auf der Bank deines Gegners, bis seine verbleibenden KP gleich 100 sind."
		}
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
	retreat: 4,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794400,
				tcgplayer: 590018
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

}

export default card
