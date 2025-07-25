import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Shiftry",
         ja: "シフトリー",
         fr: "Décalage",
         de: "Shiftry",
         es: "Cambio",
         it: "SHIFTRY",
         pt: "Shiftry",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [275],
      hp: 110,
      types: ["Darkness"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Darkness", "Colorless"],
          name: {
            en: "Push Aside",
            ja: "押しのけます",
            fr: "Écarter",
            de: "Beiseite schieben",
            es: "Apartar a empujones",
            it: "Spingere da parte",
            pt: "Deixar de lado",
          },
          effect: {
            en: "Look at your opponent's hand and choose 1 Basic Pokemon or Evolution card you find there. Your opponent puts it at the bottom of his or her deck.",
            ja: "対戦相手の手を見て、そこにある基本的なポケモンまたは進化カードを1つ選択します。相手はそれを彼または彼女のデッキの底に置きます。",
            fr: "Regardez la main de votre adversaire et choisissez 1 carte Pokémon ou évolution de base que vous y trouverez. Votre adversaire le met au bas de son deck.",
            de: "Schauen Sie sich die Hand Ihres Gegners an und wählen Sie 1 grundlegende Pokemon- oder Evolutionskarte, die Sie dort finden. Dein Gegner setzt es auf sein Deck.",
            es: "Mire la mano de su oponente y elija 1 Pokémon básica o tarjeta de evolución que encuentre allí. Tu oponente lo pone en la parte inferior de su mazo.",
            it: "Guarda la mano del tuo avversario e scegli 1 Pokemon di base o Evolution Card che trovi lì. Il tuo avversario lo mette in fondo al suo mazzo.",
            pt: "Olhe para a mão do seu oponente e escolha 1 cartão de Pokémon ou evolução básico que você encontra lá. Seu oponente o coloca no fundo do deck dele.",
          },
          damage: 30,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Supernatural Power",
            ja: "超自然的な力",
            fr: "Puissance surnaturelle",
            de: "Übernatürliche Kraft",
            es: "Poder sobrenatural",
            it: "Potere soprannaturale",
            pt: "Poder sobrenatural",
          },
          effect: {
            en: "If you have the same number of cards in your hand as your opponent, this attack does 40 damage plus 40 more damage.",
            ja: "相手と同じ数のカードを手に持っている場合、この攻撃は40ダメージに加えて40ダメージを与えます。",
            fr: "Si vous avez le même nombre de cartes en main que votre adversaire, cette attaque fait 40 dégâts plus 40 dégâts supplémentaires.",
            de: "Wenn Sie die gleiche Anzahl von Karten in der Hand haben wie Ihr Gegner, verursacht dieser Angriff 40 Schaden zuzüglich 40 weitere Schäden.",
            es: "Si tiene el mismo número de cartas en la mano que su oponente, este ataque hace 40 daños más 40 daños más.",
            it: "Se hai lo stesso numero di carte in mano dell'avversario, questo attacco infligge 40 danni più 40 danni.",
            pt: "Se você tiver o mesmo número de cartas na mão que seu oponente, esse ataque causará 40 danos mais 40 danos.",
          },
        },
      ],

      retreat: 2,

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
