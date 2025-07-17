import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Pelipper",
         ja: "ペリッパー",
         fr: "Peignet",
         de: "Pelipper",
         es: "Pelipador",
         it: "Pelipper",
         pt: "Pelipper",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [279],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Stockpile",
            ja: "備蓄",
            fr: "Stocker",
            de: "Vorrat",
            es: "Reservas",
            it: "Stockpile",
            pt: "Estoque",
          },
          effect: {
            en: "During your next turn, Spit Up's base damage is 70 instead of 30, and Swallow's base damage is 60 instead of 20.",
            ja: "次のターン中、Spit Upのベースダメージは30ではなく70で、Swallowのベースダメージは20ではなく60です。",
            fr: "Au cours de votre prochain tour, les dégâts de base de Spit Up sont de 70 au lieu de 30, et les dégâts de base de Swallow sont de 60 au lieu de 20.",
            de: "Während Ihrer nächsten Kurve beträgt der Basisschäden von Spit Up 70 anstelle von 30 und der Basisschäden von Swallow 60 anstelle von 20.",
            es: "Durante su próximo turno, el daño base de Spit Up es 70 en lugar de 30, y el daño base de Swallow es 60 en lugar de 20.",
            it: "Durante il tuo prossimo turno, il danno di base di Spit Up è di 70 anziché 30 e il danno di base di Swallow è 60 anziché 20.",
            pt: "Durante o seu próximo turno, o dano básico do Spit Up é de 70 em vez de 30, e os danos básicos de Swallow são 60 em vez de 20.",
          },
        },
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Spit Up",
            ja: "吐き出します",
            fr: "Cracher",
            de: "Aufspuckten",
            es: "Soltar un esputo",
            it: "Sputare",
            pt: "Cuspir",
          },
          damage: 30,
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Swallow",
            ja: "飲み込む",
            fr: "Avaler",
            de: "Schlucken",
            es: "Tragar",
            it: "Rondine",
            pt: "Engolir",
          },
          effect: {
            en: "After your attack, remove from Pelipper the number of damage counters equal to the damage you did to the Defending Pokemon. If Pelipper has fewer damage counters than that, remove all of them.",
            ja: "攻撃後、ペリッパーからディフェンディングポケモンに与えたダメージに等しいダメージカウンターの数を取り除きます。 Pelipperのダメージカウンターがそれよりも少ない場合は、それらすべてを削除します。",
            fr: "Après votre attaque, retirez de Pelipper le nombre de compteurs de dégâts égaux aux dégâts que vous avez causés au Pokémon en défense. Si Pelipper a moins de compteurs de dégâts que cela, retirez-les tous.",
            de: "Entfernen Sie nach Ihrem Angriff die Anzahl der Schäden, die dem Schaden, den Sie dem verteidigenden Pokemon angerichtet haben, die Anzahl der Schadenszähler entfernen. Wenn Pelipper weniger Schadenszähler als das hat, entfernen Sie alle.",
            es: "Después de su ataque, retire de la pelipadora el número de contadores de daño igual al daño que hizo al Pokémon defensor. Si Pelipper tiene menos contadores de daño que eso, retírelos todos.",
            it: "Dopo l'attacco, rimuovi da Pelipper il numero di contatori di danno pari al danno che hai fatto al Pokemon in difesa. Se Pelipper ha meno contatori di danno di così, rimuovili tutti.",
            pt: "Após o seu ataque, retire do Pelipper o número de contadores de danos iguais aos danos que você causou ao Pokémon defensivo. Se Pelipper tiver menos contadores de danos do que isso, remova todos eles.",
          },
          damage: 20,
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
