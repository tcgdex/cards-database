import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Kabutops (Delta Species)",
         ja: "カブトップス（デルタ種）",
         fr: "Kabutops (espèces delta)",
         de: "Kabutops (Delta -Arten)",
         es: "Kabutops (especie delta)",
         it: "Kabutops (Delta Species)",
         pt: "Kabutops (espécies Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [141],
      hp: 100,
      types: ["Lightning"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Vital Drain",
            ja: "重要な排水",
            fr: "Drainage vital",
            de: "Lebenswichtiger Abfluss",
            es: "Desagüe vital",
            it: "Scarico vitale",
            pt: "Dreno vital",
          },
          effect: {
            en: "If the Defending Pokemon is Knocked Out by this attack, remove all Special Conditions and 7 damage counters from Kabutops (all if there are less than 7).",
            ja: "防御ポケモンがこの攻撃によってノックアウトされた場合、カブトップからすべての特別な条件と7つのダメージカウンターを削除します（すべてが7未満の場合はすべて）。",
            fr: "Si le Pokémon en défense est éliminé par cette attaque, retirez toutes les conditions spéciales et 7 compteurs de dégâts de Kabutops (tous s'il y en a moins de 7).",
            de: "Wenn das verteidigende Pokémon durch diesen Angriff ausgeschaltet wird, entfernen Sie alle besonderen Bedingungen und 7 Schadenszähler von Kabutops (alle, wenn es weniger als 7 gibt).",
            es: "Si el Pokémon defensor es noqueado por este ataque, elimine todas las condiciones especiales y 7 contadores de daño de Kabutops (todo si hay menos de 7).",
            it: "Se il Pokemon in carica viene eliminato da questo attacco, rimuovere tutte le condizioni speciali e 7 contatori di danno da Kabutops (tutto se ce ne sono meno di 7).",
            pt: "Se o Pokémon atual for eliminado por esse ataque, remova todas as condições especiais e 7 contadores de danos dos Kabutops (tudo se houver menos de 7).",
          },
          damage: 30,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Thunderous Blow",
            ja: "雷鳴",
            fr: "Coup tondreux",
            de: "Donnernder Schlag",
            es: "Golpe",
            it: "Colpo fragoroso",
            pt: "Golpe estrondoso",
          },
          effect: {
            en: "Does 40 damage plus 10 more damage for each Lightning Energy attached to Kabutops.",
            ja: "カブトップスに取り付けられた各稲妻エネルギーに対して、40のダメージと10ダメージをさらに10ダメージします。",
            fr: "Fait 40 dégâts plus 10 dommages supplémentaires pour chaque énergie de foudre attachée aux kabutops.",
            de: "Fügt 40 Schäden plus 10 weitere Schäden für jede an Kabutops befestigte Blitzergie.",
            es: "Hace 40 daños más 10 daños más por cada energía de rayo unida a Kabutops.",
            it: "Fa 40 danni più 10 danni in più per ogni energia di fulmine attaccata a Kabutops.",
            pt: "Causam 40 danos mais 10 mais danos para cada energia de raio ligada ao Kabutops.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
