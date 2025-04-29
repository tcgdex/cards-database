import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "N's Joltik",
		fr: "Statitik de N",
		es: "Joltik de N",
		de: "Ns Wattzapf",
		it: "Joltik di N",
		pt: "Joltik do N",
		'es-mx': "Joltik de N"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Zapping Short",
			fr: "Court-Circuit Électrocutant",
			es: "Cortocircuito Aturdidor",
			de: "Kurzschlussknall",
			it: "Cortocircuito Fulminante",
			pt: "Choquinho Curto",
			'es-mx': "Cortochispazo"
		},

		effect: {
			en: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon. If you discarded a Pokémon Tool in this way, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire. Si vous avez défaussé un Outil Pokémon de cette façon, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival. Si has descartado alguna Herramienta Pokémon de esta manera, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			de: "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel. Wenn du auf diese Weise mindestens 1 Pokémon-Ausrüstung auf seinen Ablagestapel gelegt hast, ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			it: "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon dal Pokémon attivo del tuo avversario. Se hai scartato una carta Oggetto Pokémon in questo modo, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Antes de causar dano, descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente. Se você descartou uma Ferramenta Pokémon desta forma, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'es-mx': "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival. Si descartaste alguna Herramienta Pokémon de esta manera, el Pokémon Activo de tu rival ahora está Paralizado."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
