import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "By keeping still and listening intently, it can tell what is in even wild, fast-moving rivers."
	},

	name: {
		en: "Azumarill",
		fr: "Azumarill",
		de: "Azumarill",
		es: "Azumarill",
		it: "Azumarill",
		'es-mx': "Azumarill"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [184],
	hp: 130,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Body Slam",
			fr: "Plaquage",
			de: "Bodyslam",
			es: "Golpe Cuerpo",
			it: "Corposcontro",
			'es-mx': "Golpe de Cuerpo"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Paralizado."
		},

		damage: 90,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907675,
				tcgplayer: 716467
			}
		}
	],
}

export default card
