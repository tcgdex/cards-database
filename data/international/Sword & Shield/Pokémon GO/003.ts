import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [3],
	set: Set,

	name: {
		'en-us': "Venusaur",
		'fr-fr': "Florizarre",
		'es-es': "Venusaur",
		'it-it': "Venusaur",
		'pt-br': "Venusaur",
		'de-de': "Bisaflor"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Ivysaur",
		'fr-fr': "Herbizarre",
		'es-es': "Ivysaur",
		'it-it': "Ivysaur",
		'pt-br': "Ivysaur",
		'de-de': "Bisaknosp"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Loopy Lasso",
			'fr-fr': "Lasso Troublant",
			'es-es': "Lazo Captura",
			'it-it': "Stordicappio",
			'pt-br': "Laço Zonzo",
			'de-de': "Schwindliges Lasso"
		},

		effect: {
			'en-us': "Once during your turn, you may flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with their Active Pokémon, and the new Active Pokémon is now Asleep and Poisoned.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez lancer une pièce. Si c'est face, échangez l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif, et le nouveau Pokémon Actif est maintenant Endormi et Empoisonné.",
			'es-es': "Una vez durante tu turno, puedes lanzar 1 moneda. Si sale cara, cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo, y el nuevo Pokémon Activo pasa a estar Dormido y Envenenado.",
			'it-it': "Una sola volta durante il tuo turno, puoi lanciare una moneta. Se esce testa, scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo, e il nuovo Pokémon attivo viene addormentato e avvelenato.",
			'pt-br': "Uma vez durante o seu turno, você poderá jogar 1 moeda. Se sair cara, troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a), e o novo Pokémon Ativo ficará Adormecido e Envenenado.",
			'de-de': "Einmal während deines Zuges kannst du 1 Münze werfen. Tausche bei Kopf 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus, und das neue Aktive Pokémon deines Gegners schläft jetzt und ist vergiftet."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Solar Beam",
			'fr-fr': "Lance-Soleil",
			'es-es': "Rayo Solar",
			'it-it': "Solarraggio",
			'pt-br': "Raio Solar",
			'de-de': "Solarstrahl"
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "F",


	description: {
		'en-us': "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 665237,
				tcgplayer: 274435
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665237,
				tcgplayer: 274435
			}
		},
	],
}

export default card
