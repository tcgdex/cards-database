import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [864],
	set: Set,

	name: {
		'en-us': "Galarian Cursola",
		'fr-fr': "Corayôme de Galar",
		'es-es': "Cursola de Galar",
		'it-it': "Cursola di Galar",
		'pt-br': "Cursola de Galar",
		'de-de': "Galar-Gorgasonn"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Galarian Corsola",
		'fr-fr': "Corayon de Galar",
		'es-es': "Corsola de Galar",
		'it-it': "Corsola di Galar",
		'pt-br': "Corsola de Galar",
		'de-de': "Galar-Corasonn"
	},

	stage: "Stage1",
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
	retreat: 2,
	regulationMark: "E",
	illustrator: "Misa Tsutsui",

	description: {
		'en-us': "Be cautious of the ectoplasmic body surrounding its soul. You'll become stiff as stone if you touch it."
	},

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Force Regeneration",
			'fr-fr': "Régénération Forcée",
			'de-de': "Zwangsregeneration",
			'es-es': "Reanimación a la Fuerza",
			'pt-br': "Regeneração Forçada",
			'it-it': "Rigenerazione Forzata"
		},

		effect: {
			'en-us': "Put a Basic Pokémon V from your opponent's discard pile onto their Bench. If you do, put damage counters on that Pokémon until its remaining HP is 30.",
			'fr-fr': "Placez un Pokémon-V de base de la pile de défausse de votre adversaire sur son Banc. Dans ce cas, placez des marqueurs de dégâts sur ce Pokémon-là jusqu'à ce qu'il ne lui reste que 30 PV.",
			'de-de': "Lege 1 Basis-Pokémon-V aus dem Ablagestapel deines Gegners auf seine Bank. Wenn du das machst, lege so lange Schadensmarken auf jenes Pokémon, bis seine verbleibenden KP gleich 30 sind.",
			'es-es': "Pon 1 Pokémon V Básico de la pila de descartes de tu rival en su Banca. Si lo haces, pon contadores de daño en ese Pokémon hasta que le queden 30 PS.",
			'pt-br': "Coloque 1 Pokémon V Básico da pilha de descarte do seu oponente no Banco dele(a). Se fizer isto, coloque contadores de dano naquele Pokémon até o PS restante dele ser 30.",
			'it-it': "Prendi un Pokémon-V Base dalla pila degli scarti del tuo avversario e mettilo nella sua panchina. Se lo fai, metti dei segnalini danno su quel Pokémon finché i suoi PS rimanenti diventano 30."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Spooky Shot",
			'fr-fr': "Tir Effrayant",
			'de-de': "Spukschuss",
			'es-es': "Disparo Embrujado",
			'pt-br': "Tiro Assustador",
			'it-it': "Colpomistero"
		},

		damage: 80
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582632,
				tcgplayer: 253288
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582632,
				tcgplayer: 253288
			}
		},
	],
}

export default card
