import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Articuno GX",
		fr: "Artikodin GX",
		es: "Articuno GX",
		it: "Articuno GX",
		pt: "Articuno GX",
		de: "Arktos GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
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
				en: "Legendary Ascent",
				fr: "Ascension Légendaire",
				es: "Ascenso Legendario",
				it: "Ascesa Leggendaria",
				pt: "Ascenção Lendária",
				de: "Legendärer Aufstieg"
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may switch it with your Active Pokémon. If you do, move any number of Water Energy from your other Pokémon to this Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez l’échanger avec votre Pokémon Actif. Dans ce cas, déplacez autant d’Énergies Water que vous voulez de vos autres Pokémon vers ce Pokémon.",
				es: "Cuando juegues este Pokémon de tu mano a tu Banca durante tu turno, puedes cambiarlo por tu Pokémon Activo. Si lo haces, mueve cualquier cantidad de Energías Water de tus otros Pokémon a este Pokémon.",
				it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi scambiarlo con il tuo Pokémon attivo. Se lo fai, sposta un numero qualsiasi di Energie Water assegnate ai tuoi altri Pokémon su questo Pokémon.",
				pt: "Quando você joga este Pokémon da sua mão para o seu Banco durante a sua vez de jogar, você pode trocá-lo pelo seu Pokémon Ativo. Se fizer isto, mova qualquer número de Energia Water dos seus outros Pokémon para este Pokémon.",
				de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du es gegen dein Aktives Pokémon austauschen. Wenn du das machst, verschiebe beliebig viele Water-Energien von deinen anderen Pokémon auf dieses Pokémon."
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
				en: "Ice Wing",
				fr: "Aile Glace",
				es: "Ala Gélida",
				it: "Alagelata",
				pt: "Asa de Gelo",
				de: "Frostschwinge"
			},

			damage: 130,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Cold Crush GX",
				fr: "Écraser Net GX",
				es: "Apretón Frío GX",
				it: "Freddo Stritolante-GX",
				pt: "Aperto Frio GX",
				de: "Eiskalt zerquetscht GX"
			},
			effect: {
				en: "Discard all Energy from both Active Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Défaussez toute l’Énergie des deux Pokémon Actifs. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Descarta todas las Energías de ambos Pokémon Activos. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Scarta tutte le Energie assegnate a entrambi i Pokémon attivi. Non puoi usare più di un attacco GX a partita.",
				pt: "Descarte todas as Energias de ambos os Pokémon Ativos (você não pode usar mais de 1 ataque GX por partida).",
				de: "Lege alle Energien von beiden Aktiven Pokémon auf den Ablagestapel. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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
		cardmarket: 361278
	}
}

export default card
