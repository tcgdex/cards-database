import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [344],
	set: Set,

	name: {
		'en-us': "Claydol",
		'fr-fr': "Kaorine",
		'es-es': "Claydol",
		'it-it': "Claydol",
		'pt-br': "Claydol",
		'de-de': "Lepumentas"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Baltoy",
		'fr-fr': "Balbuto",
		'es-es': "Baltoy",
		'it-it': "Baltoy",
		'pt-br': "Baltoy",
		'de-de': "Puppance"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Akira Komayama",

	description: {
		'en-us': "It appears to have been born from clay dolls made by ancient people. It uses telekinesis to float and move."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Rapid Spin",
			'fr-fr': "Tour Rapide",
			'de-de': "Turbodreher",
			'es-es': "Giro Rápido",
			'pt-br': "Giro Rápido",
			'it-it': "Rapigiro"
		},

		damage: 30,

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon. If you do, your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc. Dans ce cas, votre adversaire échange son Pokémon Actif contre l'un de ses Pokémon de Banc.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus. Wenn du das machst, tauscht dein Gegner sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus.",
			'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca. Si lo haces, tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco. Se fizer isto, o seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
			'it-it': "Scambia questo Pokémon con uno della tua panchina. Se lo fai, il tuo avversario scambia il suo Pokémon attivo con uno della sua panchina."
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Ancient Imprint",
			'fr-fr': "Empreinte Ancestrale",
			'de-de': "Uralte Prägung",
			'es-es': "Marca Ancestral",
			'pt-br': "Impressão Ancestral",
			'it-it': "Influsso Antico"
		},

		effect: {
			'en-us': "Put damage counters on your opponent's Active Pokémon until its remaining HP is 60.",
			'fr-fr': "Placez des marqueurs de dégâts sur le Pokémon Actif de votre adversaire jusqu'à ce qu'il ne lui reste que 60 PV.",
			'de-de': "Lege so lange Schadensmarken auf das Aktive Pokémon deines Gegners, bis seine verbleibenden KP gleich 60 sind.",
			'es-es': "Pon contadores de daño en el Pokémon Activo de tu rival hasta que le queden 60 PS.",
			'pt-br': "Coloque contadores de dano no Pokémon Ativo do seu oponente até o PS restante dele ser 60.",
			'it-it': "Metti dei segnalini danno sul Pokémon attivo del tuo avversario finché i suoi PS rimanenti diventano 60."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582772,
				tcgplayer: 253359
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582772,
				tcgplayer: 253359
			}
		},
	],
}

export default card
