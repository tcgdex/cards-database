import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Sandslash",
         ja: "サンドスラッシュ",
         fr: "Sable",
         de: "Sandslash",
         es: "Sarnslash",
         it: "Sandslash",
         pt: "Sandshlash",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [28],
      hp: 70,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Sand Trap",
            ja: "サンドトラップ",
            fr: "Piège à sable",
            de: "Sandfalle",
            es: "Trampa de arena",
            it: "Trappola di sabbia",
            pt: "Armadilha de areia",
          },
          effect: {
            en: "If your opponent has any Benched Pokemon, choose up to 2 of them. This attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手がベンチポケモンを持っている場合は、最大2つのポケモンを選択します。この攻撃は、それぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Si votre adversaire a des pokemon bancés, choisissez jusqu'à 2 d'entre eux. Cette attaque fait 10 dégâts à chacun d'eux. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wenn Ihr Gegner ein Bank -Pokémon hat, wählen Sie bis zu 2 davon. Dieser Angriff schädigt jeweils 10 von ihnen. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Si tu oponente tiene algún Pokémon de banca, elija hasta 2 de ellos. Este ataque hace 10 daños a cada uno de ellos. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Se il tuo avversario ha dei Pokemon in panchina, scegli fino a 2 di loro. Questo attacco fa 10 danni a ciascuno di essi. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Se o seu oponente tiver algum Pokémon em banco, escolha até 2 deles. Este ataque causa 10 danos a cada um deles. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 10,
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Poison Needle Rush",
            ja: "毒針ラッシュ",
            fr: "Ruée vers l'aiguille de poison",
            de: "Giftnadelsturm",
            es: "Penseing Needle Rush",
            it: "Avvelenamento ago",
            pt: "Poison Needle Rush",
          },
          effect: {
            en: "Flip 3 coins. This attack does 20 damage times the number of heads. If you get at least 1 heads, the Defending Pokemon is now Poisoned.",
            ja: "3コインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。少なくとも1つの頭を手に入れた場合、防御するポケモンは毒されます。",
            fr: "Flip 3 pièces. Cette attaque fait 20 dégâts de temps le nombre de têtes. Si vous obtenez au moins 1 têtes, le Pokémon en défense est maintenant empoisonné.",
            de: "3 Münzen umdrehen. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe. Wenn Sie mindestens 1 Köpfe erhalten, ist das verteidigende Pokemon jetzt vergiftet.",
            es: "Flip 3 monedas. Este ataque hace 20 veces el número de cabezas. Si obtienes al menos 1 cabezas, el Pokémon defensor ahora está envenenado.",
            it: "Flip 3 monete. Questo attacco fa 20 danni il numero di teste. Se ottieni almeno 1 teste, il Pokemon in carica è ora avvelenato.",
            pt: "Flip 3 moedas. Este ataque causa 20 danos vezes o número de cabeças. Se você receber pelo menos 1 cabeças, o Pokémon atual agora está envenenado.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
