import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Beedrill (Delta Species)",
         ja: "beedrill（デルタ種）",
         fr: "Beedrill (espèces delta)",
         de: "Beedrill (Delta -Arten)",
         es: "Beedrill (especie delta)",
         it: "Beedrill (Delta Species)",
         pt: "Beedrill (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [15],
      hp: 90,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Final Sting",
            ja: "最終的な刺し傷",
            fr: "Piqûre finale",
            de: "Letzte Stich",
            es: "Picadura final",
            it: "Pintura finale",
            pt: "Picada final",
          },
          effect: {
            en: "Once during your turn (before your attack), you may Knock Out Beedrill. If you do, choose 1 of your opponent's Defending PokÃ©mon. That PokÃ©mon is now Paralyzed and Poisoned. Put 2 damage counters instead of 1 on that PokÃ©mon between turns. This power can't be used if Beedrill is affected by a Special Condition.",
            ja: "ターン中（攻撃の前に）一度、Beedrillをノックアウトすることができます。もしそうなら、対戦相手の防御Pokã©Monの1つを選択してください。そのポカンは今や麻痺し、毒されています。ターンの間にそのpokã©Monに1つではなく2つのダメージカウンターを置きます。 Beedrillが特別な状態の影響を受けている場合、この力は使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez éliminer Beedrill. Si vous le faites, choisissez 1 des Pokã © de votre adversaire. Ce pokã © Mon est maintenant paralysé et empoisonné. Mettez 2 compteurs de dégâts au lieu de 1 sur ce poké-mon entre les virages. Cette puissance ne peut pas être utilisée si Beedrill est affecté par une condition spéciale.",
            de: "Einmal in Ihrem Zug (vor Ihrem Angriff) können Sie Beedrill ausschalten. Wenn Sie dies tun, wählen Sie 1 der Verteidigung des Gegners Poké Mon Mon. Das Poké Mon Mon ist jetzt gelähmt und vergiftet. Setzen Sie 2 Schadenszähler anstelle von 1 auf diese Poké Mon Mon zwischen den Kurven. Diese Leistung kann nicht angewendet werden, wenn Beedrill von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), puede noquear a Beedrill. Si lo hace, elija 1 de su oponente defensor de Poké Mon. Ese Poké Mon ahora está paralizado y envenenado. Coloque 2 contadores de daño en lugar de 1 en ese Poké Mon entre giros. Esta potencia no se puede usar si Beedrill se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi eliminare Beedrill. Se lo fai, scegli 1 del tuo avversario di difesa di difensore mon. Quel poké mon è ora paralizzato e avvelenato. Metti 2 contatori di danno invece di 1 su quel poké mon tra i turni. Questa potenza non può essere utilizzata se Beedrill è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode nocautear Beedrill. Se o fizer, escolha 1 do defesa do seu oponente. Aquele Poké é agora está paralisado e envenenado. Coloque 2 contadores de danos em vez de 1 naquele poké entre turnos. Esse poder não pode ser usado se o Beedrill for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Metal", "Colorless"],
          name: {
            en: "Super Slash",
            ja: "スーパースラッシュ",
            fr: "Super slash",
            de: "Super Slash",
            es: "Super Slash",
            it: "Super Slash",
            pt: "Super Slash",
          },
          effect: {
            en: "If the Defending Pokemon is an Evolved Pokemon, this attack does 50 damage plus 30 more damage.",
            ja: "防御ポケモンが進化したポケモンである場合、この攻撃は50のダメージと30のダメージを与えます。",
            fr: "Si le Pokémon en défense est un Pokémon évolué, cette attaque fait 50 dégâts plus 30 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokémon ein weiterentwickeltes Pokémon ist, verursacht dieser Angriff 50 Schäden plus 30 weitere Schäden.",
            es: "Si el Pokémon defensor es un Pokémon evolucionado, este ataque hace 50 daños más 30 más de daño.",
            it: "Se il Pokemon in carica è un Pokemon evoluto, questo attacco infligge 50 danni più 30 danni.",
            pt: "Se o Pokémon atual for um Pokémon evoluído, esse ataque causará 50 danos mais 30 danos.",
          },
        },
      ],


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
