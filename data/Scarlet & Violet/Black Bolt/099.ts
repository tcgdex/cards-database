import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [636],
	set: Set,

	name: {
		en: "Larvesta",
		fr: "Pyronille",
		de: "Ignivor",
		it: "Larvesta",
		pt: "Larvesta",
		es: "Larvesta",
		'es-mx': "Larvesta"
	},

	illustrator: "Katsunori Sato",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Peck Off",
			fr: "Picpic Piqueur",
			de: "Lospicken",
			it: "Sbeccata",
			pt: "Arrancar com Bico",
			es: "Picotear",
			'es-mx': "Picotear"
		},

		effect: {
			en: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon.",
			fr: "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
			de: "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			it: "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon dal Pokémon attivo del tuo avversario.",
			pt: "Antes de causar dano, descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente.",
			es: "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
			'es-mx': "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836105
	}
}

export default card