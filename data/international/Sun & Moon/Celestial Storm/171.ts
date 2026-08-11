import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Articuno GX",
		'fr-fr': "Artikodin GX",
		'es-es': "Articuno GX",
		'it-it': "Articuno GX",
		'pt-br': "Articuno GX",
		'de-de': "Arktos GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		144,
	],

	hp: 170,

	types: [
		"Water",
	],

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Legendary Ascent",
				'fr-fr': "Ascension Légendaire",
				'es-es': "Ascenso Legendario",
				'it-it': "Ascesa Leggendaria",
				'pt-br': "Ascenção Lendária",
				'de-de': "Legendärer Aufstieg"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may switch it with your Active Pokémon. If you do, move any number of Water Energy from your other Pokémon to this Pokémon.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez l’échanger avec votre Pokémon Actif. Dans ce cas, déplacez autant d’Énergies Water que vous voulez de vos autres Pokémon vers ce Pokémon.",
				'es-es': "Cuando juegues este Pokémon de tu mano a tu Banca durante tu turno, puedes cambiarlo por tu Pokémon Activo. Si lo haces, mueve cualquier cantidad de Energías Water de tus otros Pokémon a este Pokémon.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi scambiarlo con il tuo Pokémon attivo. Se lo fai, sposta un numero qualsiasi di Energie Water assegnate ai tuoi altri Pokémon su questo Pokémon.",
				'pt-br': "Quando você joga este Pokémon da sua mão para o seu Banco durante a sua vez de jogar, você pode trocá-lo pelo seu Pokémon Ativo. Se fizer isto, mova qualquer número de Energia Water dos seus outros Pokémon para este Pokémon.",
				'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du es gegen dein Aktives Pokémon austauschen. Wenn du das machst, verschiebe beliebig viele Water-Energien von deinen anderen Pokémon auf dieses Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Ice Wing",
				'fr-fr': "Aile Glace",
				'es-es': "Ala Gélida",
				'it-it': "Alagelata",
				'pt-br': "Asa de Gelo",
				'de-de': "Frostschwinge"
			},

			damage: 130,

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Cold Crush GX",
				'fr-fr': "Écraser Net GX",
				'es-es': "Apretón Frío GX",
				'it-it': "Freddo Stritolante-GX",
				'pt-br': "Aperto Frio GX",
				'de-de': "Eiskalt zerquetscht GX"
			},
			effect: {
				'en-us': "Discard all Energy from both Active Pokémon. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Défaussez toute l’Énergie des deux Pokémon Actifs. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Descarta todas las Energías de ambos Pokémon Activos. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Scarta tutte le Energie assegnate a entrambi i Pokémon attivi. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Descarte todas as Energias de ambos os Pokémon Ativos (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Lege alle Energien von beiden Aktiven Pokémon auf den Ablagestapel. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 362164,
		tcgplayer: 170848
	}
}

export default card
