import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Slakoth",
		fr: "Parecool",
		es: "Slakoth",
		it: "Slakoth",
		pt: "Slakoth",
		de: "Bummelz"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		287,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Claw",
				fr: "Mâchoire",
				es: "Garra",
				it: "Artiglio",
				pt: "Garra",
				de: "Klaue"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				pt: "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
				de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slack Off",
				fr: "Paresse",
				es: "Relajo",
				it: "Pigro",
				pt: "Relaxar",
				de: "Tagedieb"
			},
			effect: {
				en: "Heal all damage from this Pokémon. It can’t attack during your next turn.",
				fr: "Soignez tous les dégâts de ce Pokémon. Il ne peut pas attaquer pendant votre prochain tour.",
				es: "Cura todos los puntos de daño a este Pokémon. No puede atacar durante tu próximo turno.",
				it: "Cura questo Pokémon da tutti i danni. Non può attaccare durante il tuo prossimo turno.",
				pt: "Cure todo o dano deste Pokémon. Este Pokémon não poderá atacar durante a sua próxima vez de jogar.",
				de: "Heile allen Schaden bei diesem Pokémon. Es kann während deines nächsten Zuges nicht angreifen."
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
