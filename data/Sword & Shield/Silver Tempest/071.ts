import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Mawile VSTAR",
		fr: "Mysdibule VSTAR",
		es: "Mawile V-ASTRO",
		it: "Mawile V ASTRO",
		pt: "Mawile V-ASTRO",
		de: "Flunkifer VSTAR"
	},

	rarity: "Holo Rare VSTAR",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],

	evolveFrom: {
		en: "Mawile V",
		fr: "Mysdibule-V",
		es: "Mawile V",
		it: "Mawile-V",
		pt: "Mawile V",
		de: "Flunkifer-V"
	},

	stage: "VSTAR",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			en: "Star Rondo",
			fr: "Rondo Star",
			es: "Rondó Astro",
			it: "Astro Rondò",
			pt: "Cântico Astral",
			de: "Sternenrondo"
		},

		effect: {
			en: "During your turn, if this Pokémon is on your Bench, you may switch it with your Active Pokémon. If you do, switch 1 of your opponent's Benched Pokémon with their Active Pokémon. (You can't use more than 1 VSTAR Power in a game.)",
			fr: "Pendant votre tour, si ce Pokémon est sur votre Banc, vous pouvez l'échanger contre votre Pokémon Actif. Dans ce cas, échangez l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			es: "Durante tu turno, si este Pokémon está en tu Banca, puedes cambiarlo por tu Pokémon Activo. Si lo haces, cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			it: "Durante il tuo turno, se questo Pokémon è nella tua panchina, puoi scambiarlo con il tuo Pokémon attivo. Se lo fai, scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Non puoi usare più di un Potere V ASTRO a partita.",
			pt: "Durante o seu turno, se este Pokémon estiver no seu Banco, você poderá trocá-lo pelo seu Pokémon Ativo. Se fizer isto, troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a) (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			de: "Während deines Zuges, wenn sich dieses Pokémon auf deiner Bank befindet, kannst du es gegen dein Aktives Pokémon austauschen. Wenn du das machst, tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Sudden Eater",
			fr: "Mangeur Impulsif",
			es: "Hambre Súbita",
			it: "Fame Improvvisa",
			pt: "Comilão Intempestivo",
			de: "Plötzlicher Appetit"
		},

		effect: {
			en: "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 90 more damage.",
			fr: "Si ce Pokémon a été déplacé de votre Banc vers le Poste Actif pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si este Pokémon se ha movido de tu Banca al Puesto Activo en este turno, este ataque hace 90 puntos de daño más.",
			it: "Se questo Pokémon si è spostato dalla tua panchina in posizione attiva nel turno in corso, questo attacco infligge 90 danni in più.",
			pt: "Se este Pokémon foi movido do seu Banco para o Campo Ativo durante este turno, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn dieses Pokémon während dieses Zuges von deiner Bank in die Aktive Position gewechselt ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682118
	}
}

export default card
