import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Bayleef",
         ja: "Bayleef",
         fr: "Bayleef",
         de: "Bayleef",
         es: "Bayleef",
         it: "Bayleef",
         pt: "Bayleef",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [153],
      hp: 80,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Sweet Scent",
            ja: "甘い香り",
            fr: "Doux parfum",
            de: "Süßer Duft",
            es: "Aroma dulce",
            it: "Dolce profumo",
            pt: "Perfume doce",
          },
          effect: {
            en: "Flip a coin. If heads and if any of your Pokemon have any damage counters on them, then remove 2 damage counters from 1 of them (or 1 if it only has 1). If tails and if any of your opponent's Pokemon have any damage counters on them, choose 1 of them and remove 2 damage counters from it (or 1 if it only has 1).",
            ja: "コインをひっくり返します。ヘッドとポケモンのいずれかがダメージカウンターにそれらにある場合、それらの1つから2つのダメージカウンターを削除します（または1つしかない場合は1つ）。テールと対戦相手のポケモンのいずれかがダメージカウンターにそれらを持っている場合、それらの1つを選択し、そこから2つのダメージカウンターを削除します（または1つしかない場合）。",
            fr: "Retourner une pièce. Si les têtes et si l'un de vos Pokémon a des compteurs de dégâts sur eux, retirez 2 compteurs de dégâts d'eux (ou 1 s'il n'a que 1). Si les queues et si l'un des Pokémon de votre adversaire a des compteurs de dégâts dessus, choisissez 1 d'entre eux et en retirez 2 compteurs de dégâts (ou 1 s'il en a seulement 1).",
            de: "Eine Münze drehen. Wenn Köpfe und wenn eines Ihrer Pokémon Schadenserzähler auf sich hat, entfernen Sie 2 Schadenszähler von 1 von ihnen (oder 1, wenn es nur 1 hat). Wenn Schwänze und wenn eines der Pokémon Ihres Gegners Schadenserzähler hat, wählen Sie 1 davon und entfernen Sie 2 Schadenszähler davon (oder 1, wenn es nur 1 hat).",
            es: "Voltea una moneda. Si las cabezas y si alguno de sus Pokémon tiene algún contador de daño en ellos, retire 2 contadores de daño de 1 de ellos (o 1 si solo tiene 1). Si las colas y si alguno de los pokemon de tu oponente tiene algún contador de daño en ellos, elija 1 de ellos y elimine 2 contadores de daño (o 1 si solo tiene 1).",
            it: "Capovolgi una moneta. Se le teste e se qualcuno dei tuoi Pokemon ha dei contatori di danno su di essi, rimuovi 2 contatori di danno da 1 di essi (o 1 se ha solo 1). Se le code e se uno dei pokemon del tuo avversario ha qualche contatori di danno su di essi, sceglierne 1 e rimuovi 2 contatori di danno da esso (o 1 se ha solo 1).",
            pt: "Vire uma moeda. Se as cabeças e se algum de seus Pokémon tiver algum contador de danos, remova 2 contadores de danos de 1 deles (ou 1 se ele tiver apenas 1). Se as caudas e se algum dos Pokémon do seu oponente tiver algum balcão de dano, escolha 1 deles e remova 2 contadores de dano (ou 1 se ele tiver apenas 1).",
          },
        },
        {
          cost: ["Grass", "Grass", "Grass"],
          name: {
            en: "Double Razor Leaf",
            ja: "ダブルレザーの葉",
            fr: "Feuille de rasoir double",
            de: "Doppel -Rasiererblatt",
            es: "Hoja de afeitar doble",
            it: "Doppia foglia di rasoio",
            pt: "Folha de barbear dupla",
          },
          effect: {
            en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の40回のダメージ倍になります。",
            fr: "Flip 2 pièces. Cette attaque fait 40 dégâts de temps le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 40 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 40 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 40 danni il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 40 danos vezes o número de cabeças.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
