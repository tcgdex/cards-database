import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Repel",
		fr: "Repousse",
		de: "Schutz",
		it: "Repellente",
		es: "Repelente",
		pt: "Repelente",
		'es-mx': "Repelente"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
		fr: "Envoyez le Pokémon Actif de votre adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
		de: "Wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)",
		it: "Sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
		es: "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
		pt: "Mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
		'es-mx': "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo)."
	},

	trainerType: "Item",
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 654465,
		cardmarket: 851197
	}
}

export default card