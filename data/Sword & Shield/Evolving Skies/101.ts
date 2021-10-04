import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Garbodor VMAX",
		fr: "Miasmax VMAX",
		es: "Garbodor VMAX",
		it: "Garbodor VMAX",
		pt: "Garbodor VMAX",
		de: "Deponitox VMAX"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],
	stage: "VMAX",
	illustrator: "5ban Graphics",

	abilities: [{
		type: "Ability",

		name: {
			en: "Rubbish Collecting",
			fr: "Ramassage de Déchets",
			es: "Acumulación de Basura",
			it: "Raccolta di Rifiuti",
			pt: "Rubbish Collecting",
			de: "Abfallsammler"
		},

		effect: {
			en: "This Pokémon may have up to 2 Pokémon Tools attached to it. If it loses this Ability, discard Pokémon Tools from it until only 1 remains.",
			fr: "Jusqu’à 2 Outils Pokémon peuvent être attachés à ce Pokémon. S’il perd ce talent, défaussez des Outils Pokémon jusqu’à ce qu’il ne lui en reste qu’un.",
			es: "Este Pokémon puede tener hasta 2 Herramientas Pokémon unidas a él. Si pierde esta habilidad, descarta Herramientas Pokémon hasta que solo le quede 1.",
			it: "Questo Pokémon può avere fino a due carte Oggetto Pokémon assegnate. Se perde questa abilità, scarta le carte Oggetto Pokémon assegnategli finché ne resta solo una.",
			pt: "This Pokémon may have up to 2 Pokémon Tools attached to it. If it loses this Ability, discard Pokémon Tools from it until only 1 remains.",
			de: "An dieses Pokémon können bis zu 2 Pokémon-Ausrüstungen angelegt sein. Wenn es diese Fähigkeit verliert, lege von ihm so lange Pokémon-Ausrüstungen auf deinen Ablagestapel, bis nur 1 übrig ist."
		}
	}],

	attacks: [{
		name: {
			en: "G-Max Malodor",
			fr: "Pestilence G-Max",
			es: "Gigapestilencia",
			it: "Gigafetore",
			pt: "G-Max Malodor",
			de: "Giga-Gestank"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Poisoned. During your opponent’s next turn, that Pokémon can’t retreat.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas battre en retraite.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el próximo turno de tu rival, ese Pokémon no puede retirarse.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato. Durante il prossimo turno del tuo avversario, quel Pokémon non può ritirarsi.",
			pt: "Your opponent’s Active Pokémon is now Poisoned. During your opponent’s next turn, that Pokémon can’t retreat.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Während des nächsten Zuges deines Gegners kann sich jenes Pokémon nicht zurückziehen."
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
		en: "Garbodor V",
		fr: "Miasmax-V",
		es: "Garbodor V",
		it: "Garbodor-V",
		pt: "Garbodor V",
		de: "Deponitox-V"
	},

	dexId: [569]
}

export default card