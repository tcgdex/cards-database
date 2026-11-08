import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [903],
	set: Set,

	name: {
		'en-us': "Hisuian Sneasler V",
		'fr-fr': "Farfurex de Hisui V",
		'es-es': "Sneasler de Hisui V",
		'it-it': "Sneasler di Hisui V",
		'pt-br': "Sneasler de Hisui V",
		'de-de': "Hisui-Snieboss V"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'en-us': "Poison Claws",
			'fr-fr': "Griffes Empoisonnées",
			'es-es': "Garras Venenosas",
			'it-it': "Velenartigli",
			'pt-br': "Garras Venenosas",
			'de-de': "Giftkrallen"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Dire Claw",
			'fr-fr': "Griffes Funestes",
			'es-es': "Garra Nociva",
			'it-it': "Artigli Fatali",
			'pt-br': "Garra Catastrófica",
			'de-de': "Unheilsklauen"
		},

		effect: {
			'en-us': "This attack does 80 damage for each Special Condition affecting your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 80 dégâts pour chaque État Spécial affectant le Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 80 puntos de daño por cada Condición Especial que afecte al Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 80 danni per ogni condizione speciale che influenza il Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 80 pontos de dano para cada Condição Especial afetando o Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jeden Speziellen Zustand, von dem das Aktive Pokémon deines Gegners betroffen ist, 80 Schadenspunkte zu."
		},

		damage: "80×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658835,
				tcgplayer: 272424
			}
		},
	],
}

export default card
