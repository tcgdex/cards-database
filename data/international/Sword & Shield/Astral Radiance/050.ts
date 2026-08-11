import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [405],
	set: Set,

	name: {
		'en-us': "Luxray V",
		'fr-fr': "Luxray V",
		'es-es': "Luxray V",
		'it-it': "Luxray V",
		'pt-br': "Luxray V",
		'de-de': "Luxtra V"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Fang Snipe",
			'fr-fr': "Croc Ciblé",
			'es-es': "Disparo Colmillo",
			'it-it': "Zannamirata",
			'pt-br': "Emboscada com Presas",
			'de-de': "Rasanter Reißzahn"
		},

		effect: {
			'en-us': "Your opponent reveals their hand. Discard a Trainer card you find there.",
			'fr-fr': "Votre adversaire dévoile sa main. Défaussez une carte Dresseur que vous y trouvez.",
			'es-es': "Tu rival enseña las cartas de su mano. Descarta 1 carta de Entrenador que encuentres entre ellas.",
			'it-it': "Il tuo avversario mostra le carte che ha in mano. Scarta una carta Allenatore presente tra esse.",
			'pt-br': "Seu oponente revela a própria mão. Descarte 1 carta de Treinador que encontrar lá.",
			'de-de': "Dein Gegner zeigt dir seine Handkarten. Lege 1 Trainerkarte, die du dort findest, auf seinen Ablagestapel."
		},

		damage: 30
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Radiating Pulse",
			'fr-fr': "Impulsion Radiante",
			'es-es': "Pulso Radiante",
			'it-it': "Pulsazioni Radianti",
			'pt-br': "Pulso Radiante",
			'de-de': "Pulsstrahl"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon. Your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon. Le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Descarta 2 Energías de este Pokémon. El Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Scarta due Energie da questo Pokémon. Il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Descarte 2 Energias deste Pokémon. O Pokémon Ativo do seu oponente agora está Paralisado.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel. Das Aktive Pokémon deines Gegners ist jetzt paralysiert."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658597,
				tcgplayer: 272250
			}
		},
	],
}

export default card
