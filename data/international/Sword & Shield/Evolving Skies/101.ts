import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Garbodor VMAX",
		'fr-fr': "Miasmax VMAX",
		'es-es': "Garbodor VMAX",
		'it-it': "Garbodor VMAX",
		'pt-br': "Garbodor VMAX",
		'de-de': "Deponitox VMAX"
	},

	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],
	stage: "VMAX",
	illustrator: "5ban Graphics",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Rubbish Collecting",
			'fr-fr': "Ramassage de Déchets",
			'es-es': "Acumulación de Basura",
			'it-it': "Raccolta di Rifiuti",
			'pt-br': "Rubbish Collecting",
			'de-de': "Abfallsammler"
		},

		effect: {
			'en-us': "This Pokémon may have up to 2 Pokémon Tools attached to it. If it loses this Ability, discard Pokémon Tools from it until only 1 remains.",
			'fr-fr': "Jusqu'à 2 Outils Pokémon peuvent être attachés à ce Pokémon. S'il perd ce talent, défaussez des Outils Pokémon jusqu'à ce qu'il ne lui en reste qu'un.",
			'es-es': "Este Pokémon puede tener hasta 2 Herramientas Pokémon unidas a él. Si pierde esta habilidad, descarta Herramientas Pokémon hasta que solo le quede 1.",
			'it-it': "Questo Pokémon può avere fino a due carte Oggetto Pokémon assegnate. Se perde questa abilità, scarta le carte Oggetto Pokémon assegnategli finché ne resta solo una.",
			'pt-br': "This Pokémon may have up to 2 Pokémon Tools attached to it. If it loses this Ability, discard Pokémon Tools from it until only 1 remains.",
			'de-de': "An dieses Pokémon können bis zu 2 Pokémon-Ausrüstungen angelegt sein. Wenn es diese Fähigkeit verliert, lege von ihm so lange Pokémon-Ausrüstungen auf deinen Ablagestapel, bis nur 1 übrig ist."
		}
	}],

	attacks: [{
		name: {
			'en-us': "G-Max Malodor",
			'fr-fr': "Pestilence G-Max",
			'es-es': "Gigapestilencia",
			'it-it': "Gigafetore",
			'pt-br': "G-Max Malodor",
			'de-de': "Giga-Gestank"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned. During your opponent's next turn, that Pokémon can't retreat.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas battre en retraite.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el próximo turno de tu rival, ese Pokémon no puede retirarse.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Durante il prossimo turno del tuo avversario, quel Pokémon non può ritirarsi.",
			'pt-br': "Your opponent's Active Pokémon is now Poisoned. During your opponent's next turn, that Pokémon can't retreat.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Während des nächsten Zuges deines Gegners kann sich jenes Pokémon nicht zurückziehen."
		},

		damage: 120,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,

	evolveFrom: {
		'en-us': "Garbodor V",
		'fr-fr': "Miasmax-V",
		'es-es': "Garbodor V",
		'it-it': "Garbodor-V",
		'pt-br': "Garbodor V",
		'de-de': "Deponitox-V"
	},

	dexId: [569],
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574149,
				tcgplayer: 246738
			}
		},
	],
}

export default card
