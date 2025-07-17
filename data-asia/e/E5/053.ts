import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Machamp - 053/088",
         ja: "マチャンプ-053/088",
         fr: "Machamp - 053/088",
         de: "Machamp - 053/088",
         es: "Machamp - 053/088",
         it: "Machamp - 053/088",
         pt: "Machamp - 053/088",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [68],
      hp: 120,
      types: ["Fighting"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Immunity",
            ja: "免疫",
            fr: "Immunité",
            de: "Immunität",
            es: "Inmunidad",
            it: "Immunità",
            pt: "Imunidade",
          },
          effect: {
            en: "Prevent all effects of your opponent's attacks done to Machamp.",
            ja: "マチャンプに対する相手の攻撃のすべての影響を防ぎます。",
            fr: "Empêchez tous les effets des attaques de votre adversaire effectuées à Machamp.",
            de: "Verhindern Sie alle Auswirkungen der Angriffe Ihres Gegners, die Machamp gemacht haben.",
            es: "Evite todos los efectos de los ataques de tu oponente realizados a Machamp.",
            it: "Prevenire tutti gli effetti degli attacchi del tuo avversario eseguiti a Machamp.",
            pt: "Evite todos os efeitos dos ataques do seu oponente feitos a Machamp.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Drag Off",
            ja: "ドラッグします",
            fr: "Faire glisser",
            de: "Sich abziehen",
            es: "Retirarse",
            it: "Trascina",
            pt: "Arraste",
          },
          effect: {
            en: "Before doing damage, if your opponent has any Benched Pokemon, choose 1 of them and switch it with the Defending Pokemon. If your opponent has no Benched Pokemon, ignore this effect.",
            ja: "ダメージを与える前に、相手がベンチポケモンを持っている場合は、それらの1つを選択し、防御ポケモンで切り替えます。相手がベンチポケモンを持っていない場合は、この効果を無視してください。",
            fr: "Avant de faire des dégâts, si votre adversaire a un Pokémon banc, choisissez-en 1 et changez-le avec le Pokémon en défense. Si votre adversaire n'a pas de Pokémon banc, ignorez cet effet.",
            de: "Bevor Ihr Gegner Schaden anrichtet, wählen Sie 1 davon und wechseln Sie es mit dem verteidigenden Pokemon. Wenn Ihr Gegner kein Pokémon hat, ignorieren Sie diesen Effekt.",
            es: "Antes de hacer daño, si tu oponente tiene algún Pokémon de banca, elige 1 de ellos y cambia con el Pokémon defensor. Si tu oponente no tiene Pokémon en banca, ignore este efecto.",
            it: "Prima di fare danni, se il tuo avversario ha un Pokemon in panchina, scegline 1 e cambialo con il Pokemon in difesa. Se il tuo avversario non ha Pokemon in panchina, ignora questo effetto.",
            pt: "Antes de causar danos, se o seu oponente tiver algum Pokémon em banco, escolha 1 deles e trocá -lo com o Pokémon defensor. Se o seu oponente não tiver Pokemon em banco, ignore esse efeito.",
          },
          damage: 20,
        },
        {
          cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
          name: {
            en: "Hurricane Punch",
            ja: "ハリケーンパンチ",
            fr: "Punch de l'ouragan",
            de: "Hurrikan Punch",
            es: "Puñetazo",
            it: "Punch dell'uragano",
            pt: "Punch de furacão",
          },
          effect: {
            en: "Flip 4 coins. This attack does 30 damage times the number of heads.",
            ja: "4コインをひっくり返します。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
            fr: "Flip 4 pièces. Cette attaque fait 30 dégâts de temps le nombre de têtes.",
            de: "Flip 4 Münzen. Dieser Angriff verursacht 30 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 4 monedas. Este ataque hace 30 veces el número de cabezas.",
            it: "Flip 4 monete. Questo attacco fa 30 danni volte al numero di teste.",
            pt: "Flip 4 moedas. Este ataque causa 30 danos vezes o número de cabeças.",
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
