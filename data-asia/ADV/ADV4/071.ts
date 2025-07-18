import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Metagross ex",
         ja: "Metagross Ex",
         fr: "Metagross ex",
         de: "Metagross ex",
         es: "Metagross ex",
         it: "Metagross Ex",
         pt: "Metagross Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [376],
      hp: 150,
      types: ["Metal"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Metal", "Colorless"],
          name: {
            en: "Metal Reversal",
            ja: "金属反転",
            fr: "Inversion des métaux",
            de: "Metallumkehr",
            es: "Inversión de metal",
            it: "Inversione di metallo",
            pt: "Reversão de metal",
          },
          effect: {
            en: "Before doing damage, you may choose 1 of your opponent's Benched Pokemon and switch it with 1 of the Defending Pokemon. Your opponent chooses the Defending Pokemon to switch. If you do, this attack does 40 damage to the new Defending Pokemon.",
            ja: "ダメージを与える前に、対戦相手のベンチポケモンの1つを選択し、防御ポケモンの1つで切り替えることができます。対戦相手は、防御するポケモンを選択して切り替えます。もしそうなら、この攻撃は新しい防御ポケモンに40のダメージを与えます。",
            fr: "Avant de faire des dégâts, vous pouvez choisir 1 des pokemon bancés de votre adversaire et le changer avec 1 des Pokémon en défense. Votre adversaire choisit le Pokémon en défense pour changer. Si vous le faites, cette attaque fait 40 dégâts au nouveau Pokémon défendant.",
            de: "Bevor Sie Schaden anrichten, können Sie 1 der Bankpokémon Ihres Gegners auswählen und es mit 1 des verteidigenden Pokémon schalten. Ihr Gegner wählt das verteidigende Pokemon zum Wechseln. Wenn Sie dies tun, schädigt dieser Angriff das neue verteidigende Pokemon 40.",
            es: "Antes de hacer daño, puede elegir 1 de los Pokémon de banca de su oponente y cambiarlo con 1 del Pokémon defensor. Tu oponente elige el Pokémon defensor para cambiar. Si lo haces, este ataque hace 40 daños al nuevo Pokémon defensor.",
            it: "Prima di fare danni, puoi scegliere 1 del Pokemon in panchina del tuo avversario e cambiarlo con 1 dei Pokemon in difesa. Il tuo avversario sceglie il Pokemon in carica da cambiare. Se lo fai, questo attacco infligge 40 danni al nuovo Pokemon in carica.",
            pt: "Antes de causar danos, você pode escolher 1 dos Pokémon com bancada do seu oponente e trocá -lo com 1 dos Pokémon defensores. Seu oponente escolhe o pokemon defensor para mudar. Se o fizer, esse ataque causa 40 danos ao novo Pokémon defensivo.",
          },
          damage: 40,
        },
        {
          cost: ["Metal", "Metal", "Colorless", "Colorless"],
          name: {
            en: "Extra Comet Punch",
            ja: "余分な彗星パンチ",
            fr: "Punch supplémentaire",
            de: "Extra Comet Punch",
            es: "Punch de cometa extra",
            it: "Punch di cometa extra",
            pt: "Punch de cometa extra",
          },
          effect: {
            en: "During your next turn, Extra Comet Punch does 50 damage plus 50 more damage.",
            ja: "次のターン中に、追加の彗星パンチは50のダメージと50のダメージを与えます。",
            fr: "Au cours de votre prochain tour, COMET PUNCH fait 50 dégâts plus 50 dégâts supplémentaires.",
            de: "Während Ihres nächsten Kurses verursacht zusätzlicher Komet Punch 50 Schaden zu und 50 weitere Schaden.",
            es: "Durante su próximo turno, Extra Comet Punch hace 50 daños más 50 más de daño.",
            it: "Durante il tuo prossimo turno, Extra Comet Punch infligge 50 danni più 50 danni.",
            pt: "Durante o seu próximo turno, o Comet Punch extra causa 50 danos mais 50 mais danos.",
          },
        },
      ],

      retreat: 4,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
